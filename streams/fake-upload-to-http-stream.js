import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1;

    _read() {
        const i = this.index++;

        setTimeout(() => {
            if (i > 100) return this.push(null);
            this.push(Buffer.from(String(i) + ' '));
        }, 100);
    }
}

fetch('http://127.0.0.1:3344', {
    method: 'POST',
    duplex: 'half',
    body: new OneToHundredStream(),
})
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch(console.error);
