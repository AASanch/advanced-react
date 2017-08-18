class DataApi {
    constructor(private rawData: any) {        
    }

    mapIntoObject(arr: Array<any>) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {})
    }

    getArticles() {
        return this.mapIntoObject(this.rawData.articles);
    }

    getAuthors() {
        return this.mapIntoObject(this.rawData.authors);
    }
}

export default DataApi;