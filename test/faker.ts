import { fakerBr, validateBr } from '../index';
import { expect } from 'chai';

describe('Faker test', () => {
  it('To generate any data', () => {
    expect(fakerBr.cep()).to.exist;
    // expect(fakerBr.cnpj()).to.exist;
    expect(fakerBr.cpf()).to.exist;
    // expect(fakerBr.currency()).to.exist;
    // expect(fakerBr.inscricaoestadual()).to.exist;
    // expect(fakerBr.percentage()).to.exist;
    expect(fakerBr.rg()).to.exist;
    expect(fakerBr.placa()).to.exist;
    expect(fakerBr.telefone()).to.exist;
    expect(fakerBr.time()).to.exist;
    expect(fakerBr.titulo()).to.exist;
  });


  it('CEP', () => {
    const cep = fakerBr.cep();
    expect(validateBr.cep(cep)).to.be.true;
  });
  it('CNPJ', () => {
    const cnpj = fakerBr.cnpj();
    console.log(cnpj)
    expect(validateBr.cnpj(cnpj)).to.be.true;
  });
  // it('CPF', () => {
  //   const cpf = fakerBr.cpf();
  //   expect(validateBr.cpf(cpf)).to.be.true;
  // });
  // it('RG', () => {
  //   const rg = fakerBr.rg();
  //   expect(validateBr.rg(rg)).to.be.true;
  // });
  // it('PLACA', () => {
  //   const placa = fakerBr.placa();
  //   expect(validateBr.placa(placa)).to.be.true;
  // });
  // it('Telefone', () => {
  //   const telefone = fakerBr.telefone();
  //   expect(validateBr.telefone(telefone)).to.be.true;
  // });
  // it('Time', () => {
  //   const time = fakerBr.time();
  //   expect(validateBr.time(time)).to.be.true;
  // });
  // it('Titulo', () => {
  //   const titulo = fakerBr.titulo();
  //   expect(validateBr.titulo(titulo)).to.be.true;
  // });
  it('Others', () => {
    // const currency  = fakerBr.currency();
    // expect(validateBr.currency(currency)).to.be.true;

    // const inscricaoestadual  = fakerBr.inscricaoestadual();
    // expect(validateBr.inscricaoestadual(inscricaoestadual)).to.be.true;

    // const percentage  = fakerBr.percentage();
    // expect(validateBr.percentage(percentage)).to.be.true;
  });

});