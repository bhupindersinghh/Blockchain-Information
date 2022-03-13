import React from "react";
import { Carousel, Row, Col, Card, Accordion } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#E0FFFF" }}>
      <Carousel style={{ margin: "0rem 2rem" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/digital-transformation-conceptual-generation-technology-era_109643-131.jpg?w=996"
            alt="First slide"
            height={"500px"}
          />
          <Carousel.Caption>
            <h3>BlockChain world</h3>
            <p>Read more about blockchain below</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/02/86/02/67/360_F_286026740_xWkobcEk5g38qrH7cpfeImAnlUUSIrc5.webp"
            alt="Second slide"
            width={"100%"}
            height={"500px"}
          />

          <Carousel.Caption>
            <h3>BlockChain world</h3>
            <p>Read more about blockchain below</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/digital-technology-flowing-lines-motion-background_1017-31769.jpg?w=740"
            alt="Third slide"
            width={"100%"}
            height={"500px"}
          />

          <Carousel.Caption>
            <h3>BlockChain world</h3>
            <p>Read more about blockchain below</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <Row xs={1} md={1} lg={1} className="g-4" style={{ margin: "0rem" }}>
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ margin: "1rem 7rem" }}>
              <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <Card.Img
                  height={"110px"}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRDv2cUXNeaXGcz32G5yZsvTbjeSb10Exxw&usqp=CAU"
                />
              </div>
              <Card.Body>
                <Card.Title>What Is a Blockchain?</Card.Title>
                <Card.Text>
                  A blockchain is a distributed database that is shared among
                  the nodes of a computer network. As a database, a blockchain
                  stores information electronically in digital format.
                  Blockchains are best known for their crucial role in
                  cryptocurrency systems, such as Bitcoin, for maintaining a
                  secure and decentralized record of transactions. The
                  innovation with a blockchain is that it guarantees the
                  fidelity and security of a record of data and generates trust
                  without the need for a trusted third party.
                </Card.Text>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Read more</Accordion.Header>
                    <Accordion.Body style={{ color: "black" }}>
                      A blockchain is a distributed database that is shared
                      among the nodes of a computer network. As a database, a
                      blockchain stores information electronically in digital
                      format. Blockchains are best known for their crucial role
                      in cryptocurrency systems, such as Bitcoin, for
                      maintaining a secure and decentralized record of
                      transactions. The innovation with a blockchain is that it
                      guarantees the fidelity and security of a record of data
                      and generates trust without the need for a trusted third
                      party.<br></br>One key difference between a typical
                      database and a blockchain is how the data is structured. A
                      blockchain collects information together in groups, known
                      as blocks, that hold sets of information. Blocks have
                      certain storage capacities and, when filled, are closed
                      and linked to the previously filled block, forming a chain
                      of data known as the blockchain. All new information that
                      follows that freshly added block is compiled into a newly
                      formed block that will then also be added to the chain
                      once filled. A database usually structures its data into
                      tables, whereas a blockchain, like its name implies,
                      structures its data into chunks (blocks) that are strung
                      together. This data structure inherently makes an
                      irreversible time line of data when implemented in a
                      decentralized nature. When a block is filled, it is set in
                      stone and becomes a part of this time line. Each block in
                      the chain is given an exact time stamp when it is added to
                      the chain.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={1} md={1} lg={1} className="g-4" style={{ margin: "0rem" }}>
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ margin: "1rem 7rem" }}>
              <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <Card.Img
                  height={"110px"}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRDv2cUXNeaXGcz32G5yZsvTbjeSb10Exxw&usqp=CAU"
                />
              </div>
              <Card.Body>
                <Card.Title>How Does a Blockchain Work?</Card.Title>
                <Card.Text>
                  The goal of blockchain is to allow digital information to be
                  recorded and distributed, but not edited. In this way, a
                  blockchain is the foundation for immutable ledgers, or records
                  of transactions that cannot be altered, deleted, or destroyed.
                  This is why blockchains are also known as a distributed ledger
                  technology (DLT).
                </Card.Text>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Read more</Accordion.Header>
                    <Accordion.Body style={{ color: "black" }}>
                      The goal of blockchain is to allow digital information t
                      be be recorded and distributed, but not edited. In th way,
                      a a blockchain is the foundation for immutable ledge rec
                      rds o records of transactions that cannot be alter or
                      destroyed. or destroyed. This is why blockchains a dis
                      ribut d ledger te distributed ledger technology (DLT).
                      <br></br>First proposed as a research project in 1991, the
                      blockchain concept predated its first widespread
                      application in use: Bitcoin, in 2009. In the years since,
                      the use of blockchains has exploded via the creation of
                      various cryptocurrencies, decentralized finance (DeFi)
                      applications, non-fungible tokens (NFTs), and smart
                      contracts.
                      <h2>Transaction Process</h2>
                      <img src="https://www.investopedia.com/thmb/DgmKuK6aoY6Jw3P4eox-oMEMvh0=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Blockchain_Sep_2020-01-60f31a638c4944abbcfde92e1a408a30.jpg"></img>
                      <h2>Attributes of Cryptocurrency</h2>
                      <img
                        src="https://www.investopedia.com/thmb/hZuXjD7RtdrEZQcM8uU67CJSjOk=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Blockchain_Sep_2020-02-d8258ab814a34756bf51f1f95c78dc63.jpg"
                        alt=""
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={1} md={1} lg={1} className="g-4" style={{ margin: "0rem" }}>
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ margin: "1rem 7rem" }}>
              <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <Card.Img
                  height={"110px"}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRDv2cUXNeaXGcz32G5yZsvTbjeSb10Exxw&usqp=CAU"
                />
              </div>
              <Card.Body>
                <Card.Title>Blockchain Decentralization</Card.Title>
                <Card.Text>
                  Imagine that a company owns a server farm with 10,000
                  computers used to maintain a database holding all of its
                  client’s account information. This company owns a warehouse
                  building that contains all of these computers under one roof
                  and has full control of each of these computers and all of the
                  information contained within them. This, however, provides a
                  single point of failure. What happens if the electricity at
                  that location goes out? What if its Internet connection is
                  severed? What if it burns to the ground? What if a bad actor
                  erases everything with a single keystroke? In any case, the
                  data is lost or corrupted.
                </Card.Text>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Read more</Accordion.Header>
                    <Accordion.Body style={{ color: "black" }}>
                      Imagine that a company owns a server farm with 10,000
                      computers used to maintain a database holding all of its
                      client’s account information. This company ow warehouse
                      warehouse building that contains all of t h ot under one
                      roof under one roof and has full contr o l of each of
                      these computers and all of the information contained
                      within them. This, however, provides a single point of
                      failure What happens if the electricity at that location
                      goes severed? What if itout? tIernet connection is
                      severed? What if itr erases eveything rground? What if a
                      bad actor erases everyth data is lost oring while
                      keystroke? In any case, the data is lost or corrupted.
                      <br></br>What a blockchain does is to allow the data held
                      in that database to be spread out among several network
                      nodes at various locations. This not only creates
                      redundancy but also maintains the fidelity of the data
                      stored therein—if somebody tries to alter a record at one
                      instance of the database, the other nodes would not be
                      altered and thus would prevent a bad actor from doing so.
                      If one user tampers with Bitcoin’s record of transactions,
                      all other nodes would cross-reference each other and
                      easily pinpoint the node with the incorrect information.
                      This system helps to establish an exact and transparent
                      order of events. This way, no single node within the
                      network can alter information held within it. Because of
                      this, the information and history (such as of transactions
                      of a cryptocurrency) are irreversible. Such a record could
                      be a list of transactions (such as with a cryptocurrency),
                      but it also is possible for a blockchain to hold a variety
                      of other information like legal contracts, state
                      identifications, or a company’s product inventory.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={1} md={1} lg={1} className="g-4" style={{ margin: "0rem" }}>
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card style={{ margin: "1rem 7rem" }}>
              <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <Card.Img
                  height={"110px"}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRDv2cUXNeaXGcz32G5yZsvTbjeSb10Exxw&usqp=CAU"
                />
              </div>
              <Card.Body>
                <Card.Title>Transparency</Card.Title>
                <Card.Text>
                  Because of the decentralized nature of Bitcoin’s blockchain,
                  all transactions can be transparently viewed by either having
                  a personal node or using blockchain explorers that allow
                  anyone to see transactions occurring live. Each node has its
                  own copy of the chain that gets updated as fresh blocks are
                  confirmed and added. This means that if you wanted to, you
                  could track Bitcoin wherever it goes.
                </Card.Text>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Read more</Accordion.Header>
                    <Accordion.Body style={{ color: "black" }}>
                      Because of the decentralized nature of Bitcoin’s
                      blockchain, all transactions can be transparently viewed
                      by either having a personal node or using blockchain
                      explorers that allow anyone to see transactions occurring
                      live. Each node has its own copy of the chain that gets
                      updated as fresh blocks are confirmed and added. This
                      means that if you wanted to, you could track Bitcoin
                      wherever it goes.
                      <br></br>
                      For example, exchanges have been hacked in the past, where
                      those who kept Bitcoin on the exchange lost everything.
                      While the hacker may be entirely anonymous, the Bitcoins
                      that they extracted are easily traceable. If the Bitcoins
                      stolen in some of these hacks were to be moved or spent
                      somewhere, it would be known.
                      <br></br>
                      Of course, the records stored in the Bitcoin blockchain
                      (as well as most others) are encrypted. This means that
                      only the owner of a record can decrypt it to reveal their
                      identity (using a public-private key pair). As a result,
                      users of blockchains can remain anonymous while preserving
                      transparency.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
