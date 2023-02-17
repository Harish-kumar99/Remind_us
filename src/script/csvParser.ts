export class CsvParser {
  public convertInto2dArray = async (fileData: any): Promise<any> => {
    const mainArray: any = [];
    fileData.map((row: any) => {
      if (row.split(",").filter((cell: any) => cell).length !== 0) {
        mainArray.push(row.replace("\r", "").split(","));
      }
    });
    return mainArray;
  };
  public convert2dArraytoJson = async (fileData: any): Promise<any> => {
    const [keys, ...values] = fileData;
    return values.map((vs: any) =>
      vs.reduce((acc: any, v: any, i: number) => ((acc[keys[i]] = v), acc), {})
    );
  };
  public csvAsJson = async (fileData: string[]): Promise<any> => {
    const array2d = await this.convertInto2dArray(fileData);
    return await this.convert2dArraytoJson(array2d);
  };
}
