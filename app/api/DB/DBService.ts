const path = require('path');
const fs = require('fs').promises;
const fileName = 'DataBase.json';
const filePath = path.join(process.cwd(), 'app', 'api', 'DB', fileName);

export const DBService = {
  readDB: async function () {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return await JSON.parse(data);
    } catch (err) {
      throw new Error(err.message);
    }
  },
  writeDB: function (data: any) {
    if (!data) return null;
    try {
      const existingData = this.readDB();
      //@ts-ignore
      const item = existingData.find(({ id }) => id === data.id);
      if (!item) {
        existingData.push(data);
        fs.writeFileSync('database.json', JSON.stringify(existingData));
      }

      return this.readDB();
    } catch (err) {
      console.error('Failed to write data:', err);
    }
  },

  saveCookieToDataBase: async function (value: any) {
    try {
      let data = await this.readDB();
      const isInDataBase = data.some((item: any) => item.cookie === value);

      if (isInDataBase) return;

      data.push({ cookie: value, timeStamp: new Date() });
      await fs.writeFile(filePath, JSON.stringify(data));
    } catch (err) {
      throw new Error(err.message);
    }
  },

  // updateDB: function (uniqueIdentifier = "id") {
  //   const existingData = this.readDB();

  //   if (!existingData) {
  //     console.error("No existing data found.");
  //     return;
  //   }
  //   const indexToUpdate = existingData.findIndex(
  //     (record) => record[uniqueIdentifier] === updatedRecord[uniqueIdentifier]
  //   );

  //   if (indexToUpdate === -1) {
  //     console.error("Record not found for update.");
  //     return;
  //   }
  //   existingData[indexToUpdate] = {
  //     ...existingData[indexToUpdate],
  //     ...updatedRecord,
  //   };
  //   writeDB(existingData, nameDB);
  // },

  // removeRecord: function (uniqueIdentifier: string) {
  //   const existingData = this.readDB();
  //   //@ts-ignore
  //   const newData = existingData.filter(({ id }) => id === uniqueIdentifier);
  //   try {
  //     fs.writeFileSync('database.json', JSON.stringify(newData));
  //   } catch (err) {
  //     throw new Error(err.message);
  //   }
  // },
};
