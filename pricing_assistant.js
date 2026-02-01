// Variables
let productName = "Applejack Cider"
let costPerUnit = 10
let basePrice = 15
let discountRate = .15
const salesTaxRate = .07
const fixedMonthlyCost = 2923

// Pricing/cost metrics
let discountedPrice = basePrice * (1 - discountRate)
let finalPriceWithTax = discountedPrice * (1 - salesTaxRate)
let profitPerUnit = finalPriceWithTax -costPerUnit
let breakEvenUnits = math.ciel(fixedMonthlyCost / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0

//END: console test
