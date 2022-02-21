const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema({
  AggrementType: {
    type: String,
  },
  employeeFirstName: {
    type: String,
    default: "",
  },
  employeeLastName: {
    type: String,
    default: "",
  },
  nationality: {
    type: String,

    default: "",
  },
  countryOfWork: {
    type: String,

    default: "",
  },
  email: {
    type: String,

    default: "",
  },
  companyType: {
    type: String,

    default: "",
  },
  companyName: {
    type: String,

    default: "",
  },
  companyAddress: {
    type: String,

    default: "",
  },
  companyPhoneNumber: {
    type: String,

    default: "",
  },
  companyEmail: {
    type: String,
    default: "",
  },
  companyRegNo: {
    type: String,
    default: "",
  },
  companyVAT: {
    type: String,
    default: "",
  },
  permanentJob: {
    type: String,
    default: "",
  },
  startOfWork: {
    type: Date,
    default: "",
  },
  endOfWork: {
    type: Date,
    default: "",
  },
  differentlocations: {
    type: Boolean,
    default: "",
  },
  jobTitle: {
    type: String,
    default: "",
  },
  jobScope: {
    type: String,
    default: "",
  },
  currency: {
    type: String,
    default: "",
  },
  period: {
    type: String,
    default: "",
  },
  grossSalary: {
    type: String,
    default: "",
  },
  commissionPlan: {
    type: String,
    default: "",
  },
  probationPeriod: {
    type: String,
    default: "",
  },
  payPeriod: {
    type: String,
    default: "",
  },
  timeOff: {
    type: String,
    default: "",
  },
  paidVactionDays: {
    type: Number,
    default: "",
  },
  sickDays: {
    type: Number,
    default: "",
  },
  healthcareInsurance: {
    type: String,
    default: "",
  },
  CommissionFormula: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "",
  },
  signUrl: {
    type: String,
    default: "",
  },
  remarks: {
    type: String,
    default: "",
  },
  bankName: {
    type: String,
    default: "",
  },
  bankAddress: {
    type: String,
    default: "",
  },
  bankNumber: {
    type: String,
    default: "",
  },
  accountNumber: {
    type: String,
    default: "",
  },
  documents: {
    type: Array,
    default: [],
  },
  commercialContract1: {
    type: String,
    default: "",
  },
  commercialContract2: {
    type: String,
    default: "",
  },
  employementContract: {
    type: String,
    default: "",
  },
  contractType: {
    type: String,
    default: "Employment full time",
  },
  vickySignature: {
    type: String,
    default: "",
  },
  vickySignatureDate: {
    type: Date,
    default: "",
  },
  customerSignature: {
    type: String,
    default: "",
  },
  customerSignatureDate: {
    type: Date,
    default: "",
  },
  employeeSignature: {
    type: String,
    default: "",
  },
  employeeSignatureDate: {
    type: Date,
    default: "",
  },
  vickyEmployeeSignature: {
    type: String,
    default: "",
  },
  vickyEmployeeSignatureDate: {
    type: Date,
    default: "",
  },
  clientName: {
    type: String,
    default: "",
  },
  vickeyApproved: {
    type: Boolean,
    default: false,
  },
  createdByEmail: {
    type: String,
    default: "",
  },
});
const Contracts = mongoose.model("Contracts", ContractSchema);
module.exports = Contracts;
