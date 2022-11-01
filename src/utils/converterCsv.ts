import { Readable } from "stream";
import readline from "readline";

export class converterCsv {
  execute(buffer: Buffer | undefined) {
    if (buffer) {
      const readableFile = new Readable();
      readableFile.push(buffer);
      readableFile.push(null);

      const productsLine = readline.createInterface({
        input: readableFile,
      });

      return productsLine;
    }
  }
}
