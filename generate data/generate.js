module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        data: _.times(40, function (n) {
            return {
                id: n,
                title: faker.lorem.word(),
                company:faker.company.companyName(),
                image: faker.image.sports(),
                price: faker.commerce.price(),
                currency : faker.finance.currencySymbol(),
            }
        })
    }
}