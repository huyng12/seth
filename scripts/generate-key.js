const { ec } = require("elliptic");

// Initialize secp256k1 curve
const secp256k1 = new ec("secp256k1");

const createPrivateKey = () => secp256k1.genKeyPair().getPrivate("hex");

function bootstrap() {
    const key = createPrivateKey();
    console.log(`Generated secp256k1 key: ${key}`);
}

bootstrap();
