const fs = require('node:fs');

export const DB = {
  readDB: () => {
    try {
      const data = fs.readFileSync('database.json', 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Failed to read data:', err);
      return [];
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

      console.log('Data Saved');
      return this.readDB();
    } catch (err) {
      console.error('Failed to write data:', err);
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

  removeRecord: function (uniqueIdentifier: string) {
    const existingData = this.readDB();
    //@ts-ignore
    const newData = existingData.filter(({ id }) => id === uniqueIdentifier);
    try {
      fs.writeFileSync('database.json', JSON.stringify(newData));
      console.log('Removed successfully');
    } catch (err) {
      console.error('Failed to write data:', err);
    }
  },
};
