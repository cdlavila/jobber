class Repository {
  async create (data) {
    const createdData = new this.model(data)
    await createdData.save()
    return createdData
  }

  async getAll (filters = {}) {
    return this.model.find(filters)
  }

  async getById (id) {
    return this.model.findById(id)
  }

  async update (id, data) {
    const foundData = await this.model.findById(id)
    const columns = Object.keys(data)
    columns.forEach(column => {
      foundData[column] = data[column]
    })
    foundData.save()
    return foundData
  }

  async delete (id) {
    return this.model.deleteOne({
      _id: id
    })
  }
}

module.exports = Repository
