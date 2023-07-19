const bridge = () => {

    {
        [
            {
                network : "layerZero",
                id : 1,
                tokens :[
                    {
                        name : "token",
                        balance : 100,
                        address : "0x1234"
                    }
                ]
            }
        ]
    }
  const { networks[1], tokens[1] } = useBridge();
  return (
    <>

    setNetwork("gravity");
      <div>bridge</div>
    </>
  );
};

export default bridge;
