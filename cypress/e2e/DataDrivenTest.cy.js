

describe('DataDriven Testing', () => {
    
        let testData;

        before('Run Before Tests',()=>{
            cy.fixture('dataDrivenTest.json').then((jsondata)=>{
                    testData=jsondata;
            })
        })

        it('DataDrivenDemo', () => {
        cy.visit('https://www.google.com/search?q=javascript+by+tester+talks&sca_esv=fa8fe62a24a75465&source=hp&ei=aGvWZd6AKInN0PEPte6-wAQ&iflsig=ANes7DEAAAAAZdZ5eHejj2mV3Nohc9Q1YlK4fhNZK6Um&ved=0ahUKEwje1LbDsL2EAxWJJjQIHTW3D0gQ4dUDCA8&uact=5&oq=javascript+by+tester+talks&gs_lp=Egdnd3Mtd2l6IhpqYXZhc2NyaXB0IGJ5IHRlc3RlciB0YWxrczIFECEYoAEyBRAhGKABMgUQIRigAUj5S1CuA1jPMHABeACQAQCYAVSgAa4LqgECMjG4AQPIAQD4AQGoAgrCAh0QABiABBiKBRjlAhjlAhjqAhi0AhiKAxi3AxjUA8ICCxAuGIAEGIoFGJECwgIREAAYgAQYigUYkQIYsQMYgwHCAgUQLhiABMICDhAuGIAEGIoFGLEDGIMBwgILEC4YgAQYsQMYgwHCAggQLhiABBixA8ICCxAAGIAEGLEDGIMBwgIKEC4YgAQYigUYQ8ICChAAGIAEGIoFGEPCAg4QLhiDARixAxiABBiKBcICEBAAGIAEGIoFGEMYsQMYgwHCAhMQABiABBiKBRhDGLEDGIMBGMkDwgIQEC4YgAQYigUYQxixAxiDAcICCxAAGIAEGIoFGJIDwgINEAAYgAQYigUYQxixA8ICBRAAGIAEwgIIEAAYgAQYsQPCAg4QABiABBiKBRiRAhixA8ICBhAAGBYYHsICBxAAGIAEGA3CAggQABgWGB4YCsICCxAAGIAEGIoFGIYD&sclient=gws-wiz')
        cy.get('#APjFqb').clear()
        cy.get('#APjFqb').type(testData.skill1)

        cy.get("button[type='submit']").click()

    })
  })
