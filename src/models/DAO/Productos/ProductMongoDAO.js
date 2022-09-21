class ProductDbDAO {
    constructor(nameCollection) {
        this.nameCollection = nameCollection;
        this.model = mongoose.model(nameCollection, ProductsSchema);
      }
    async getByID(id) {
        const item = await this.model.findById(id);
        return item;
    }

    async getAll() {
        try {
            
        } catch (error) {
            
        }
    }

    async save(elem) {
      const nuevoItem = new this.model(elem);
      await nuevoItem.save();
       
    }

    async update(id, elem) {
        await this.modelo.findByIdAndUpdate(id, elem);
    }

    async deleteByID(id) {
        await this.model.findByIdAndDelete(id);
    
    }

    async deleteAll() {
       
    }
}

export default ProductDbDAO
