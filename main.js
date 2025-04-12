// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  function pAequorFactory(specimenNum, dna){
    return {
        specimenNum: specimenNum,
        dna: dna,
        mutate(){
          const dnaBases = ['A', 'T', 'C', 'G'];
          const randomIndex = Math.floor(Math.random() * this.dna.length);

          const currentBase = this.dna[randomIndex];

          let newBase = currentBase;
          while(newBase === currentBase){
            newBase = dnaBases[Math.floor(Math.random() *4)];
          }

          this.dna[randomIndex] = newBase;

          return this.dna;

          
        }
    };
  };
  
 // Function to test pAequorFactory
function testPAequorFactory() {
    // Use mockUpStrand() to generate random DNA
    const testOrganism = pAequorFactory(1, mockUpStrand());
  
    // Print the returned object
    console.log("Testing pAequorFactory:");
    console.log(testOrganism);
  
    // Check if the object contains the correct properties
    console.log("Specimen Number:", testOrganism.specimenNum); // Should be 1
    console.log("DNA Strand:", testOrganism.dna); // Should contain an array of 15 bases
  }
  
  // Run the test
  testPAequorFactory(); 
  
  
  
  
  
  
  