---
title: 'Scalability & The Modular Blockchain Stack'
author: 'Phil Bonello'
date: '2022-01-25'
categories: Insights
---
Scalability, the ability to increase the number of transactions, is **critical** to all blockchains.

It’s critical because to onboard the rest of the world onto web3, and unlock this technology’s full potential, it is necessary to find solutions that can handle ever-increasing transactions-per-second (TPS), and as a result, provide faster and cheaper transactions.

Although many new chains boast high TPS, innovation is limited and the trade-offs are significant. We’re far from enabling the current financial system from running on-chain. As an example, the most optimized layer 1 architecture, Solana, can do about 2,500 (as seen on [Solana Beach](https://solanabeach.io/)) TPS. Impressive as it is, this is orders of magnitude lower than Visa’s claimed 65,000 transactions per second.

I was introduced to crypto in 2017 and since then, the majority of the research has been focused on scaling. I worked on Ethereum 2.0 and hoped sharded execution would be the end-game for all scalability needs, yet there has been little to no progress on improving the losses in composability that occur due to cross-shard communication and has led to the pivot to focus on rollups.

Because scalability is such a concern, developers are moving from Ethereum to new smart contract platforms, but as demand for these platforms increases, block space gets filled and the user experience once again depreciates. (e.g. Avalanche fees [skyrocketing](https://cryptoslate.com/avalanche-fees-spike-to-10-as-backers-ironically-criticize-ethereum/))

Up until this point, development to increase TPS has focused on the following: 

*   faster consensus algorithms (allowing nodes to agree on the order of transactions faster),

*   optimizing the execution environments (making transactions run faster), and 

*   propagating blocks faster

These three things cover almost 99% of the incremental innovations that most chains boast.

To give credit where it’s due, some teams have done an outstanding job researching and implementing the above approaches. Practical, incremental innovations as noted above coupled with writing the whole codebase from scratch to juice out very performant nodes (rather than forking and building on go-ethereum) did improve TPS by almost an order of magnitude. **But for these platforms to continue scaling, they all have to resort to increasing hardware requirements in exchange for meager linear growth.** What if there was a better architecture that allowed for better scaling AND kept decentralization intact?

#### Scalability

The blockchain platforms of today can be considered monolithic. Every node performs all parts that make up a blockchain: execution, consensus, and data availability.

**Execution** is the computation of transactions that are included in a block. Simply put, it’s the process of taking the number of coins a user has on Ethereum, subtracting the amount of Ether she is sending, and saving the result. 

**Consensus** is needed to order these transactions. Without a consensus algorithm, it is impossible for a group of computers to come to an agreement on the order of transactions, and thus reach the same state.

Lastly, **data availability** is the process of guaranteeing blocks are fully published to the network. For light clients (low resource blockchain nodes) to work, the network must be sure that full blocks are being published, so that when there is an invalid block an honest node can create a fraud-proof. Data availability is critical for scaling blockchains, as it allows the network to increase its capacity without requiring all nodes to linearly increase their resources.

Scaling a blockchain today means scaling all three of these components together and at the same time.

Since the agricultural revolution, humans have relied on specialization for ever increased efficiency and productivity. Software is no different. In fact, the Internet protocol stack of today is composed of layers that each serve a single purpose. As a whole, they are the foundation of the Internet that we all use and love today. 

These modular layers also allow for greater flexibility and experimentation. For example, at the transport layer of the Internet protocol suite, which we use in every connection online to send packets from one of our computers to others, there are many different protocols, TCP, UDP, and SCTP being a few examples, that developers can pick and choose from to serve the needs of their applications in the best way possible.

Applying a similar paradigm to blockchains can provide similar scalability benefits.

#### Enter modular blockchain design.

The execution layer is the user-facing layer (called rollups) where transactions get executed.

The settlement layer (optional) provides finality to all rollups on top, allowing them to bridge trustlessly.

The data availability & consensus layer provides ordering of transactions and guarantees all data is published & accessible.

#### Let’s dive deep.

Not every node needs to execute every single transaction in order for all other nodes to provably know that the blockchain is valid. As long as we have a base layer where we can dump all execution data, we can guarantee (through zero-knowledge proofs or game-theoretic mechanisms) that transactions are valid and known by all. So, these transactions can now be executed by just a single node.

If this node acts maliciously, it gets slashed, another node picks up the execution, and we march ahead.

So what does this mean? It means that we have now shifted the focus from scaling many nodes together to scaling one node. This is a much simpler engineering feat. As evidenced by the performance of the big web2 platforms of today, we already know how to scale this type of execution. 

So, the scalability of the execution layer is now out of the way but, there’s a caveat. In order to trust an execution layer, the execution layer must dump all data to a data availability layer. If not, there is no way for light nodes (low resource nodes) to be aware of potential fraud in the execution layer. This is because light nodes do not execute any transactions themselves.

So, we need a cheap way for anyone keeping up with the execution layer to provably know if the operator (rollup block producer) has committed fraud. Fortunately, there are a couple of ways that this can be accomplished.  

#### Sovereign rollups (as [Celestia](https://celestia.org/) team calls them)

Rollups as we know them have to settle on smart contract chains which typically handle data availability *and* settlement. Rollups need to execute either fraud or validity proofs on the smart contract chain from which they derive security and are bound by the capacity and the execution of that chain. Because current smart contracts chains handle the settlement, scalability is limited. 

However, a **sovereign rollup doesn’t require a smart contract chain. Instead, every transaction is published on the data availability layer but settled between the rollup nodes themselves. Importantly, the data availability layer is not responsible for execution and settlement, which allows for improved scale and finality. The execution occurs on the rollup, the data is made available on the DA layer, and the settlement ultimately occurs once again on the rollup. The rollup is kept secure by rollup full nodes that monitor the DA layer and report invalid blocks through fraud-proofs.** 

Once a fraud-proof is generated by any honest full node, it is propagated across the rollup network, and any light/full node that receives the fraud-proof immediately drops the invalid block and slashes the invalid block-producing operator. This keeps block producers honest.

If no light node receives a fraud-proof within the designated time frame, they can be sure that the block is valid.

**Since the rollup isn’t concerned with getting transactions included on a potentially congested or spammable settlement chain, this rollup can provide way better latency to finality.**

***

#### Settlement layer (optional) with a hub and spoke model

In the hub and spoke model, (check out Matthew Di Ferrante’s awesome [post](https://forum.celestia.org/t/an-open-modular-stack-for-evm-based-applications-using-celestia-evmos-and-cosmos/89) where he proposes the idea) a restricted settlement layer sits on top of the data availability layer. 

In total there might be three layers: a typical rollup (execution), a settlement layer (sovereign rollup), and a data availability later. The settlement layer works as a blockchain with its own block producers and execution, but the execution is restricted to certain types of transactions, making it simpler to optimize.

Specifically, the settlement layer only cares about storing execution layer block data and executing fraud proofs for optimistic rollups, or storing state diffs and validity proofs for zk-rollups, and doing transfers between these rollups. 

Simply by following the settlement layer, users get the full guarantee that the execution work is valid. Settlement layer nodes have a small footprint due to their specialized nature since they do not bear the heavy load computed at the execution layer.

A cool thing about the hub and spoke model is that there can be many rollup/execution layers that can be bridged trustlessly. Since the settlement layer provides security for all the executions running on top, in the case of a re-org, all the execution layers also re-org, removing the security risk inherent with bridging. As Vitalik recently [put](https://bit.ly/3FR95TI), the shared security of this model is preferable to the fragmented security of the multi-chain world. In fact, Eth2.0 will function as this hub, providing both settlement and data availability. 

However, this model can also be implemented on top of any specialized DA layer such as Celestia or Polygon Avail. Specifically, the collaboration between Celestia (data availability) and Evmos (settlement/hub) is an interesting example of a hub model.

#### Comparing the two

Both of these models have different trade-offs. In the Hub & Spoke model, the execution layer is bound by the limitations of the underlying settlement layer but benefits from trustless interoperability with other executions. As an example, Arbitrum and Optimism both use Ethereum as their settlement and data availability layer like a hub. In the case of an Ethereum re-org, regardless of the amount of money bridged between them, since both of these execution layers also re-org along with Ethereum, neither of the execution layers is at risk of losing funds.

In the case of sovereign rollups, building an execution layer directly on top of the DA layer takes the fraud-proof processing off-chain. This allows for greater flexibility around latency, upgradeability, and many other things. However, we don’t get interoperability between execution layers. 

#### Scaling the data availability layer

The amount of data that needs to be posted by the execution layer increases linearly with the number of transactions that are executed. **So, we need scalable data layers.**

Turns out, scaling specialized data layers is much easier than scaling monolithic blockchains. 

Using a combination of erasure codes, which is the same technology that allows us to play CDs despite being heavily scratched, and data availability sampling (asking for N random small parts) of block data, each node can probabilistically guarantee that all the block data is available and published to the network. (check out Mustafa Al-Bassam’s [post](https://coinmarketcap.com/alexandria/article/what-is-data-availability) which dives deep into the data availability problem and solutions)

Later on, these nodes can come together and piece out the entire data by combining the samples each light node individually possesses.

The neat thing about this sampling is that the sample size necessary is logarithmic to the DA layer block size (i.e scales incredibly well), and as you add more nodes to the network, the data capacity of the network increases.

The major implication is that we can substantially scale “secure” data availability, in similar ways to a file-sharing network like BitTorrent.

#### Wrapping up

**After years of research and uncertainty, scaling blockchains is FINALLY theoretically solved. I can not overstate how big of a deal this is. I’m literally losing sleep over it.** 

It also means that the era of smart contract blockchains that handle all of consensus, data, and execution is coming to an end.

The next generation of protocols will be much more specialized, cater to different parts of what we call a blockchain today, and provide vastly increased flexibility for experimentation.

We’re in for a wild ride — Ethereum-based rollup teams or their forks will deploy on settlement layers that use Celestia, Eth2.0, or any other specialized DA layer. 

Settlement layers, DA layers, and execution layers will all be optimized in different ways.

I expect many smart contract platforms of today to become individual layers of this new stack, and many new players to rise. There might be big opportunities for teams that have special expertise in certain areas such as VMs, consensus algorithms, and networking.

To a bright & scalable future,

Cem Ozer

*Thanks to Phil Bonello, Fran Oliva, Jonny Rhea, Rene Lubov, Can Gurel, and Alex Beckett for their feedback.*

**Sources:**

*   [**https://cryptoslate.com/avalanche-fees-spike-to-10-as-backers-ironically-criticize-ethereum/**](https://cryptoslate.com/avalanche-fees-spike-to-10-as-backers-ironically-criticize-ethereum/)

*   [**https://coinmarketcap.com/alexandria/article/what-is-data-availability**](https://coinmarketcap.com/alexandria/article/what-is-data-availability)

