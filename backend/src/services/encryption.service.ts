import crypto from 'crypto';
import {configs} from "../configs";
import {encryptAlgorithmsConstant} from "../constants";

class EncryptionService {
    constructor(private readonly key = configs.SECRET_KEY) {
    }

    public encrypter(msg: string, bytes: number, algorithm = encryptAlgorithmsConstant["aes-256-cbc"]): string {
        const iv = this.iv().setIv(bytes);

        const encrypter = this.makeEncryptoFunction(algorithm, this.key, iv);

        let encryptedMsg = encrypter.update(msg, 'utf8', 'hex');

        encryptedMsg += encrypter.final("hex");

        return encryptedMsg;
    }

    public decrypter(encryptedMsg: string, algorithm = encryptAlgorithmsConstant["aes-256-cbc"]): string {
        const iv = this.iv().getIv();

        const decrypter = this.makeDecrypterFunction(algorithm, this.key, iv);

        let decryptedMsg = decrypter.update(encryptedMsg, "hex", "utf8");

        decryptedMsg += decrypter.final("utf8");

        return decryptedMsg;
    }

    private iv(): { getIv: () => string, setIv: (bytes: number) => string } {
        let iv = '';

        return {
            getIv: () => iv,
            setIv: (bytes: number) => {
                if (!this.iv().getIv()) {
                    iv = this.generateBytesOfRandomData(bytes);
                }
                return iv;
            },
        }
    }

    private generateBytesOfRandomData (bytes: number): string {
        return crypto.randomBytes(bytes).toString('hex').slice(0, bytes);
    }

    private makeEncryptoFunction(algorithm: string, key: string, iv: string): crypto.Cipher {
        return crypto.createCipheriv(algorithm, key, iv);
    }

    private makeDecrypterFunction(algorithm: string, key: string, iv: string): crypto.Cipher {
        return crypto.createCipheriv(algorithm, key, iv);
    }
}

export const encryptionService = new EncryptionService();
