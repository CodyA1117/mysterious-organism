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
  
            
          },
          compareDNA(otherPAequor) {
        let matchCount = 0; // To count how many bases match
        const totalBases = this.dna.length; // Total number of bases to compare
  
        // Loop through the DNA arrays to compare each base
        for (let i = 0; i < totalBases; i++) {
          if (this.dna[i] === otherPAequor.dna[i]) {
            matchCount++; // Increment if the bases are the same
          }
        }
  
        // Calculate the percentage of DNA that matches
        const percentageMatch = (matchCount / totalBases) * 100;
  
        // Print the result
        console.log(`Specimen #${this.specimenNum} and Specimen #${otherPAequor.specimenNum} have ${percentageMatch.toFixed(2)}% DNA in common.`);
      },

      willLikelySurvive(){
        let matchCount = 0;
        for(i = 0; i < this.dna.length; i++){
            if(this.dna[i] === 'C' || this.dna[i] === 'G'){
                matchCount ++;
            }
        }
        const percentage = (matchCount / this.dna.length) * 100;

        return percentage >= 60;
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
const specimen1 = pAequorFactory(1, ['A', 'T', 'C', 'G', 'A']);
const specimen2 = pAequorFactory(2, ['A', 'T', 'G', 'G', 'C']);

// Compare their DNA
specimen1.compareDNA(specimen2);

const specimen = pAequorFactory(1, ['A', 'C', 'G', 'G', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'C', 'T']);
console.log("Will Likely Survive:", specimen.willLikelySurvive());
    
 // Create a sample organism with a DNA strand unlikely to survive
const weakOrganism = pAequorFactory(1, ['A', 'T', 'A', 'T', 'A', 'T', 'A', 'T', 'A', 'T', 'A', 'T', 'A', 'T', 'A']);

// Test .willLikelySurvive() for this DNA
console.log("Will Likely Survive (Expected: false):", weakOrganism.willLikelySurvive());
   
  
  
  
  
  
  
  
  
  
  