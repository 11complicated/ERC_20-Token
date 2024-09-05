async function main( ) {
    const [deployer] = await ethers.getSigners( );
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const weiAmount = (await deployer.provider.getBalance(deployer.address)).toString( );
    
    console.log("Account balance:", (await ethers.formatEther(weiAmount)));
  
    const Token = await ethers.getContractFactory("MySWRToken");
    const token = await Token.deploy(1000); //initial supply of tokens to mint: 1,000
    await token.waitForDeployment( );
  
    console.log("Token address:", (await token.getAddress( )));
}
  
main( )
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
});