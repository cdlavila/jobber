class Repository {
  async create (data) {
    const createdData = new this.Model(data)
    await createdData.save()
    return createdData
  }

  async getAll (query = {}, population = null) {
    return population ? this.Model.find(query).populate(population) : this.Model.find(query)
  }

  async getById (id, population = null) {
    return population ? this.Model.findById(id).populate(population) : this.Model.findById(id)
  }

  async getOne (query) {
    return this.Model.findOne(query)
  }

  async update (id, data) {
    const foundData = await this.Model.findById(id)
    const columns = Object.keys(data)
    columns.forEach(column => {
      foundData[column] = data[column]
    })
    foundData.save()
    return foundData
  }

  async delete (id) {
    return this.Model.deleteOne({
      _id: id
    })
  }
}

module.exports = Repository
