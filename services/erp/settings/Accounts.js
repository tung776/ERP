export default {
    async getInitData(axios) {
        const data = {}
        try {
            data.currency = await axios.get('/currency/getForList')
            data.paymentMethod = await axios.get('/paymentMethod/getForList')
            data.paymentTermList = await axios.get('/paymentTerm/getForList')
            data.accountsCategories = await axios.get('/accountsCategories')
            data.expensesCategories = await axios.get('/expensesCategories')
            data.taxSettings = await axios.get('/taxSettings')
            data.chartOfAccount = await axios.get('/chartOfAccount/getForDd')
            data.paymentMethod = await axios.get('/paymentMethod')
            data.paymentTerm = await axios.get('/paymentTerm')
            return data
        } catch (error) {
            return data.error = error
        }
    }
}