// Netflix & Spotify
// Importação de clientes via CSV (Excel)
// 1GB - 1.000.000 de linhas
// POST /upload import.csv
// 10MB/S  - 100s
// 100s => Inseções no banco de dados (Demorado)
// Solução: Processar o arquivo em pedaços (streams)
// Readble Streams / writable Streams


// process.stdin.pipe(process.stdout);

import { Readable, Writable, Transform } from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1;

    _read() {
        const i = this.index++;
        setTimeout(() => {
            if (i > 100) {
                this.push(null);
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf, ' k')
            }
        }, 100);
    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1;
        callback(null, Buffer.from(String(transformed)));
    }
}

class MultiplyByTenStream extends Writable { 
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10);
        callback();
    }
}
new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream());