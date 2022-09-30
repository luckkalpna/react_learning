import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {

    articles = [
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Cryptoverse: Bitcoin miners get stuck in a bear pit - Reuters",
                "description": "Cryptoverse: Bitcoin miners get stuck in a bear pit  Reuters",
                "url": "https://www.reuters.com/technology/cryptoverse-bitcoin-miners-get-stuck-bear-pit-2022-09-27/",
                "urlToImage": "https://www.reuters.com/resizer/i0pAJuhLdd7LHa8MRf9_AOBX3ts=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OWRJ2G6AQNOSBCG2QYUETRASBY.jpg",
                "publishedAt": "2022-09-27T05:13:00Z",
                "content": "Sept 27 (Reuters) - Spare a thought for the beleaguered bitcoin miner.\r\nIn late 2021, miners were the toast of the town with a surefire path to profit: hook powerful computers up to cheap power, crac… [+3450 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Bitcoin once again slips below $20000 - Reuters",
                "description": "Bitcoin on Sunday dropped 1.54% to $19,804, slipping from the 20,000 mark after losing $310 from its previous close.",
                "url": "https://www.reuters.com/technology/bitcoin-once-again-slips-below-20000-2022-09-18/",
                "urlToImage": "https://www.reuters.com/resizer/GinA1NFuisA5sivR91vluRb8SQo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TUWQZU5ZZJIF3HLCX5BGWH22LU.jpg",
                "publishedAt": "2022-09-18T10:17:00Z",
                "content": "Sept 18 (Reuters) - Bitcoin on Sunday dropped 1.54% to $19,804, slipping from the 20,000 mark after losing $310 from its previous close.\r\nThe world's biggest and best-known cryptocurrency is down 58.… [+372 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Cryptoverse: Ether snaps at bitcoin's heels in race for crypto crown - Reuters.com",
                "description": "For years, ether could barely dream of challenging its big brother bitcoin. Now, its ambitions may be becoming more realistic.",
                "url": "https://www.reuters.com/technology/cryptoverse-ether-snaps-bitcoins-heels-race-crypto-crown-2022-09-13/",
                "urlToImage": "https://www.reuters.com/resizer/D6UAwg9xkBVA9UviKEjSKPGTI3w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QQABWUBD6JJ3JJLRDJTC3IQMFI.jpg",
                "publishedAt": "2022-09-13T05:12:00Z",
                "content": "Sept 13 (Reuters) - For years, ether could barely dream of challenging its big brother bitcoin. Now, its ambitions may be becoming more realistic.\r\nThe second-biggest cryptocurrency is taking market … [+3625 chars]"
            },
            {
                "source": { "id": "bbc-news", "name": "BBC News" },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Ethereum Merge: How one big cryptocurrency is going green",
                "description": "Ethereum, which currently uses as much energy as a medium-sized country, is to halt cryptomining.",
                "url": "https://www.bbc.co.uk/news/technology-62891715",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5833/production/_126697522_66d3ee21-4213-480e-954e-f9574f987446.jpg",
                "publishedAt": "2022-09-13T23:26:31Z",
                "content": "By Joe TidyCyber reporter \r\nThe second biggest cryptocurrency, Ethereum, is about to switch over to a new operating model that uses 99.9% less energy.\r\nThe change, called The Merge, is designed to wi… [+5489 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "A year on, El Salvador's bitcoin experiment is stumbling - Reuters",
                "description": "A year after El Salvador adopted bitcoin as legal tender, the area where the world's first cryptocurrency city was meant to be built - a circular metropolis powered by a volcano - is still dense jungle.",
                "url": "https://www.reuters.com/technology/year-el-salvadors-bitcoin-experiment-is-stumbling-2022-09-07/",
                "urlToImage": "https://www.reuters.com/resizer/M2nfbcQlV8tRGnSyxgL1ckw_GCo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/R5NQIKYDFJOPVKTTZCH3JCHMFM.jpg",
                "publishedAt": "2022-09-07T11:22:00Z",
                "content": "CONCHAGUA, El Salvador, Sept 7 (Reuters) - A year after El Salvador adopted bitcoin as legal tender, the area where the world's first cryptocurrency city was meant to be built - a circular metropolis… [+5145 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Bitcoin mining struggles to go green, research shows - Reuters",
                "description": "Bitcoin is struggling to go green, with the cryptocurrency making only slim gains in its usage of sustainable energy in the year to January, research by Cambridge university showed on Tuesday.",
                "url": "https://www.reuters.com/technology/bitcoin-mining-struggles-go-green-research-shows-2022-09-27/",
                "urlToImage": "https://www.reuters.com/resizer/GinA1NFuisA5sivR91vluRb8SQo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TUWQZU5ZZJIF3HLCX5BGWH22LU.jpg",
                "publishedAt": "2022-09-27T07:48:00Z",
                "content": "LONDON, Sept 27 (Reuters) - Bitcoin is struggling to go green, with the cryptocurrency making only slim gains in its usage of sustainable energy in the year to January, research by Cambridge universi… [+2095 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": "Reuters Editorial",
                "title": "Crypto Weekly: Bitcoin slides back to $20,000 - Reuters",
                "description": "From bitcoin’s big slide back towards $20,000 to what a court says you can’t buy with Central African Republic’s new coin, we round up the week's big stories in the world of virtual money. Trevor Koroll reports.",
                "url": "https://www.reuters.com/video/watch/idOV160130082022RP1",
                "urlToImage": "https://static.reuters.com/resources/r/?d=20220830&i=OV160130082022RP1&r=OV160130082022RP1&t=2",
                "publishedAt": "2022-08-30T21:11:50Z",
                "content": "Posted \r\nFrom bitcoins big slide back towards $20,000 to what a court says you cant buy with Central African Republics new coin, we round up the week's big stories in the world of virtual money. Trev… [+17 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Bitcoin leaps over $20000 as U.S. dollar sags - Reuters.com",
                "description": "Bitcoin surged past the $20,000 barrier and was eyeing its best day in six weeks on Friday as the U.S. dollar fell broadly and markets found reasons to be cheerful at the end of a dour week.",
                "url": "https://www.reuters.com/technology/bitcoin-leaps-over-20000-us-dollar-sags-2022-09-09/",
                "urlToImage": "https://www.reuters.com/resizer/p7BxA15YEPz4q9B66YsLQLgimKc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WGN4MHHONRKOVPA4I45NTIU62Q.jpg",
                "publishedAt": "2022-09-09T07:45:00Z",
                "content": "SINGAPORE, Sept 9 (Reuters) - Bitcoin surged past the $20,000 barrier and was eyeing its best day in six weeks on Friday as the U.S. dollar fell broadly and markets found reasons to be cheerful at th… [+1216 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": "Reuters Editorial",
                "title": "A year on, El Salvador's bitcoin trial is stumbling - Reuters",
                "description": "A year after El Salvador adopted bitcoin as legal tender, the area where the world's first cryptocurrency city was meant to be built is still dense jungle. Angela Johnston reports.",
                "url": "https://www.reuters.com/video/watch/idOV343307092022RP1",
                "urlToImage": "https://static.reuters.com/resources/r/?d=20220907&i=OV343307092022RP1&r=OV343307092022RP1&t=2",
                "publishedAt": "2022-09-07T22:50:11Z",
                "content": "Posted \r\nA year after El Salvador adopted bitcoin as legal tender, the area where the world's first cryptocurrency city was meant to be built is still dense jungle. Angela Johnston reports."
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": "Reuters Editorial",
                "title": "Why bitcoin mining struggles to go green - Reuters.com",
                "description": "Projects have sought ways to shift bitcoin mining towards cleaner energy. But new research shows the world's largest cryptocurrency has only made slim gains in its usage of sustainable power in the year to January 2022. Francesca Lynagh has more.",
                "url": "https://www.reuters.com/video/watch/idOV826227092022RP1",
                "urlToImage": "https://static.reuters.com/resources/r/?d=20220928&i=OV826227092022RP1&r=OV826227092022RP1&t=2",
                "publishedAt": "2022-09-28T11:59:40Z",
                "content": "Posted \r\nProjects have sought ways to shift bitcoin mining towards cleaner energy. But new research shows the world's largest cryptocurrency has only made slim gains in its usage of sustainable power… [+55 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Cryptoverse: Bleeding bitcoin's holding out for a hero - Reuters",
                "description": "Cryptoverse: Bleeding bitcoin's holding out for a hero  Reuters",
                "url": "https://www.reuters.com/markets/europe/cryptoverse-bleeding-bitcoins-holding-out-hero-2022-08-30/",
                "urlToImage": "https://www.reuters.com/resizer/14CC3_xOfbC5OEGUr3z7N39xNHg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BUOALE3VDVLURENRYFCO2JVESE.jpg",
                "publishedAt": "2022-08-30T05:16:00Z",
                "content": "Aug 30 (Reuters) - Who can save bitcoin?\r\nThe world's biggest cryptocurrency can't seem to catch a break. It finally looked to be regaining strength this month, breaching $25,000 for the first time s… [+3695 chars]"
            },
            {
                "source": { "id": null, "name": "ReadWrite" },
                "author": "Tabasum M",
                "title": "Bitcoin Alternatives With Massive Growth Potential In 2022",
                "description": "Bitcoin was launched in 2009, but a person or group of individuals named Satoshi Nakamoto. This was the time after the global economic meltdown of 2008, and many people felt the need for a financial system that did not depend on Big Banks. Bitcoin was launche…",
                "url": "https://readwrite.com/bitcoin-alternatives-with-massive-growth-potential-in-2022/",
                "urlToImage": "https://images.readwrite.com/wp-content/uploads/2022/09/Bitcoin-and-Inflation.jpg",
                "publishedAt": "2022-09-26T15:44:44Z",
                "content": "Bitcoin was launched in 2009, but a person or group of individuals named Satoshi Nakamoto. This was the time after the global economic meltdown of 2008, and many people felt the need for a financial … [+6749 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Ethereum Merge Explained: Experts break down the risks of the long-awaited crypto update",
                "description": "Blockchain experts call Ethereum's merge the most important event in crypto history, after the creation of ether and bitcoin.",
                "url": "https://markets.businessinsider.com/news/currencies/ethereum-merge-explained-blockchain-update-cryptocurrency-bitcoin-crypto-eth-vitalik-2022-9",
                "urlToImage": "https://i.insider.com/631f2d2b89d2b3001894999b?width=1200&format=jpeg",
                "publishedAt": "2022-09-12T15:18:09Z",
                "content": "The long-awaited Ethereum merge event is set to happen around Thursday, according to the Ethereum Foundation, and experts say it will reduce the blockchain's energy consumption by 99%. \r\nThe update, … [+4117 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "insider@insider.com (Sam Becker)",
                "title": "Shorting cryptocurrency is a high-risk, advanced investing strategy. Here's how it works",
                "description": "Investors can short cryptocurrencies like Bitcoin, but high volatility and lack of crypto regulation make it particularly risky.",
                "url": "https://www.businessinsider.com/personal-finance/can-you-short-crypto",
                "urlToImage": "https://i.insider.com/630e13db2d6c740018c3feca?width=1200&format=jpeg",
                "publishedAt": "2022-08-30T16:35:43Z",
                "content": "When you think about investing, the idea is usually that you profit when the price of an asset increases, and lose money when it falls.\r\nAnother, more-advanced approach is short-selling, or shorting.… [+8172 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "insider@insider.com (Charles Bovaird)",
                "title": "Bitcoin mining powers the system that oversees transactions and creates new bitcoins",
                "description": "Bitcoin mining is the way transactions using the cryptocurrency are validated and how new bitcoins are added into circulation.",
                "url": "https://www.businessinsider.com/personal-finance/bitcoin-mining",
                "urlToImage": "https://i.insider.com/61a0feca1ca5280018115d58?width=1200&format=jpeg",
                "publishedAt": "2022-08-30T20:19:08Z",
                "content": "Bitcoin mining is a crucial part of the cryptocurrency's underlying technology through which transactions are verified and added to the digital ledger known as blockchain. The owners and operators of… [+7864 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "JPMorgan CEO Jamie Dimon slammed crypto as dangerous - and called bitcoin a Ponzi scheme",
                "description": "The billionaire banker argued that bitcoin and other speculative tokens don't do anything, and facilitate fraud, theft, and money laundering.",
                "url": "https://markets.businessinsider.com/news/currencies/jpmorgan-jamie-dimon-bitcoin-crypto-blockchain-regulation-crime-ponzi-scheme-2022-9",
                "urlToImage": "https://i.insider.com/60b0c30b02ac410018f934e3?width=1200&format=jpeg",
                "publishedAt": "2022-09-22T10:26:24Z",
                "content": "Jamie Dimon has doubled down on his disdain for bitcoin and some other cryptocurrencies, arguing they serve no purpose beyond vacuuming up new buyers' money to pay out profits to their existing holde… [+2764 chars]"
            },
            {
                "source": { "id": null, "name": "Slashdot.org" },
                "author": "EditorDavid",
                "title": "'El Salvador Had a Bitcoin Revolution. Hardly Anybody Showed Up'",
                "description": "It's the one-year anniversary of El Salvador's adopting Bitcoin as a legal tender, so Bloomberg follows up, finding a country where \"Adoption has moved slowly, and steep declines in Bitcoin's price from those lofty levels last fall have dampened the early eup…",
                "url": "https://slashdot.org/story/22/09/03/181210/el-salvador-had-a-bitcoin-revolution-hardly-anybody-showed-up",
                "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
                "publishedAt": "2022-09-03T18:34:00Z",
                "content": "It's the one-year anniversary of El Salvador's adopting Bitcoin as a legal tender, so Bloomberg follows up, finding a country where \"Adoption has moved slowly, and steep declines in Bitcoin's price f… [+3104 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Michael Saylor says UK turmoil is a signal to 'opt out' and embrace bitcoin as policymakers scramble to avert disaster in global markets",
                "description": "\"The 'crisis' the central bankers are trying to avert is the free functioning of markets delivering fair interest rates,\" Saylor wrote on Twitter.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoin-uk-debt-markets-crisis-michael-saylor-microstrategy-crypto-bonds-2022-9",
                "urlToImage": "https://i.insider.com/631133643fe7c40019e4f2fd?width=1200&format=jpeg",
                "publishedAt": "2022-09-29T16:45:42Z",
                "content": "Michael Saylor, co-founder of MicroStrategy, said bitcoin offers a non-sovereign store of value, while policymakers at the Bank of England scramble to stabilize financial markets with bond-buying. \r\n… [+1856 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Analysis: Rebounding real yields spell trouble for U.S. stocks - Reuters.com",
                "description": "Expectations of more jumbo rate hikes from the Federal Reserve are pushing up real yields in the United States, putting pressure on everything from technology shares and meme stocks to bitcoin.",
                "url": "https://www.reuters.com/markets/europe/rebounding-real-yields-spell-trouble-us-stocks-2022-09-08/",
                "urlToImage": "https://www.reuters.com/resizer/gHOyfDz6AP4hPd4Sx3kN1our9Fo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/54C37NC4XJMTREHGZZJHA5LZII.jpg",
                "publishedAt": "2022-09-08T16:09:00Z",
                "content": "NEW YORK, Sept 8 (Reuters) - Expectations of more jumbo rate hikes from the Federal Reserve are pushing up real yields in the United States, putting pressure on everything from technology shares and … [+4484 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Canada's Conservatives pick populist in bid to oust Trudeau's Liberals - Reuters Canada",
                "description": "Canada's Conservatives on Saturday picked Pierre Poilievre, a veteran parliamentarian who has promoted bitcoin as way to fight inflation, to spearhead the party's bid to oust the Liberals and Prime Minister Justin Trudeau.",
                "url": "https://www.reuters.com/world/americas/canadas-conservatives-pick-populist-bid-oust-trudeaus-liberals-2022-09-11/",
                "urlToImage": "https://www.reuters.com/resizer/GMi2DmFNwMH3VPq_aXUIi78kV6Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H5KL4DXQKBJ4HCOMXQJPP73TDA.jpg",
                "publishedAt": "2022-09-11T00:10:00Z",
                "content": "OTTAWA, Sept 10 (Reuters) - Canada's Conservatives on Saturday picked Pierre Poilievre, a veteran parliamentarian who has promoted bitcoin as way to fight inflation, to spearhead the party's bid to o… [+2956 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "NFT sales are hot! But what exactly is for sale? - Reuters.com",
                "description": "NFTs, or non-fungible tokens, represent ownership interests in digital assets. Each NFT is unique, as distinct from fungible assets such as U.S. currency, Bitcoin or Ethereum, and created on a blockchain (by \"minting\").",
                "url": "https://www.reuters.com/legal/legalindustry/nft-sales-are-hot-what-exactly-is-sale-2022-09-13/",
                "urlToImage": "https://www.reuters.com/resizer/-og-OKQnJGVdl74n14DbRgeF63I=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZR2FRT4V5JD2XMKOH4EXX7D5TU.JPG",
                "publishedAt": "2022-09-13T14:46:00Z",
                "content": "September 13, 2022 - NFTs, or non-fungible tokens, represent ownership interests in digital assets. Each NFT is unique, as distinct from fungible assets such as U.S. currency, Bitcoin or Ethereum, an… [+7706 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Canada's Conservatives set to embrace populist to take on Trudeau - Reuters.com",
                "description": "Canada's Conservatives next month look set to embrace a career politician who has promised to fire the central bank governor and promoted bitcoin as an inflation hedge to become its fourth leader since 2020.",
                "url": "https://www.reuters.com/world/americas/canadas-conservatives-set-embrace-populist-take-trudeau-2022-09-01/",
                "urlToImage": "https://www.reuters.com/resizer/K_JCHc1HxwcHb7GniCvJbQe2vpI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I3H2EGP35RO5PC5YH6GHL7NDBY.jpg",
                "publishedAt": "2022-09-01T10:04:00Z",
                "content": "OTTAWA, Sept 1 (Reuters) - Canada's Conservatives next month look set to embrace a career politician who has promised to fire the central bank governor and promoted bitcoin as an inflation hedge to b… [+3160 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Lawyer of alleged crypto launderer urges Russia to discuss prisoner swap - letter - Reuters",
                "description": "The lawyer of a Russian man accused of laundering more than $4 billion through the digital currency bitcoin urged Moscow on Monday to begin negotiations with the United States to include his client in a potential prisoner swap.",
                "url": "https://www.reuters.com/world/europe/lawyer-alleged-crypto-launderer-urges-russia-discuss-prisoner-swap-letter-2022-09-05/",
                "urlToImage": "https://www.reuters.com/resizer/ibTu9Ia1Og3Fyo5MFwGwsUetBcw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/R7M3WV7F4ZOSFGXHLJJRLKQ6MA.jpg",
                "publishedAt": "2022-09-05T19:17:00Z",
                "content": "MOSCOW, Sept 5 (Reuters) - The lawyer of a Russian man accused of laundering more than $4 billion through the digital currency bitcoin urged Moscow on Monday to begin negotiations with the United Sta… [+2472 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": "Reuters Editorial",
                "title": "Crypto Weekly: something in the Ether - Reuters",
                "description": "From why ether is gaining ground on bitcoin, to an unhappy crypto anniversary in El Salvador, we round up the week's big stories in the world of alternative currencies. Olivia Zollino reports.",
                "url": "https://www.reuters.com/video/watch/idOV496413092022RP1",
                "urlToImage": "https://static.reuters.com/resources/r/?d=20220913&i=OV496413092022RP1&r=OV496413092022RP1&t=2",
                "publishedAt": "2022-09-13T17:25:35Z",
                "content": "Posted \r\nFrom why ether is gaining ground on bitcoin, to an unhappy crypto anniversary in El Salvador, we round up the week's big stories in the world of alternative currencies. Olivia Zollino report… [+1 chars]"
            },
            {
                "source": { "id": null, "name": "Entrepreneur" },
                "author": "Jea Yu",
                "title": "Forget Bitcoin, Block’s Ecosystems are the Real Growth Drivers",
                "description": "It’s been a tough year for payments platform fintech Block (NYSE: SQ) stock as it trades down (-58%) on the year. The old adage, “it’s better to have had and",
                "url": "https://www.entrepreneur.com/article/434756",
                "urlToImage": "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-434756.jpeg",
                "publishedAt": "2022-09-06T06:00:00Z",
                "content": "It's been a tough year for payments platform fintech Block (NYSE: SQ) stock as it trades down (-58%) on the year. The old adage, \"it's better to have had and lost, than to never had it at all\" is wha… [+7299 chars]"
            },
            {
                "source": { "id": null, "name": "Entrepreneur" },
                "author": "Madeline Garfinkle",
                "title": "Crypto Crash: Bitcoin Fell Below 6%, Ethereum Down 10%",
                "description": "It's more bad news for crypto, but what's to blame for the ongoing falls in value?",
                "url": "https://www.entrepreneur.com/business-news/why-is-crypto-crashing/435593",
                "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1663599478-GettyImages-1340690117.jpg",
                "publishedAt": "2022-09-19T14:58:00Z",
                "content": "Early Monday morning, Investing.com tweeted some sobering news for the crypto community: Bitcoin had fallen below $19,000 to $18,802.1, marking a further decline from its \"psychological threshold\" of… [+1713 chars]"
            },
            {
                "source": { "id": null, "name": "Gizmodo.com" },
                "author": "Matt Novak",
                "title": "Ethereum Plunges After SEC Chair Says ‘The Merge’ Could Make Crypto a Security",
                "description": "Ethereum, the second largest cryptocurrency in the world, continued to plunge in price over the weekend following the network’s highly publicized technical change known as ‘the Merge’ last Thursday as well as comments from the head of the Securities and Excha…",
                "url": "https://gizmodo.com/ethereum-bitcoin-price-plunges-sec-chair-merge-security-1849551695",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/34cc7d800a03d8c7270c224e5d1f8eb2.jpg",
                "publishedAt": "2022-09-19T10:00:00Z",
                "content": "Ethereum, the second largest cryptocurrency in the world, continued to plunge in price over the weekend following the networks highly publicized technical change known as the Merge last Thursday as w… [+2672 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "The crypto bear market will continue if bitcoin confirms its recent breakdown below $20,000, Fairlead's Katie Stockton says",
                "description": "\"Short-term momentum has shifted negative per a new daily MACD 'sell' signal,\" Fairlead Strategies' Katie Stockton said.",
                "url": "https://markets.businessinsider.com/news/currencies/crypto-bear-market-bitcoin-prices-20000-btc-breakdown-technical-analysis-2022-9",
                "urlToImage": "https://i.insider.com/632b4a2048c188001815b1f1?width=1200&format=jpeg",
                "publishedAt": "2022-09-21T18:14:47Z",
                "content": "The crypto bear market is likely to continue as long as bitcoin confirms its recent breakdown below $20,000, according to a Tuesday note from Fairlead Strategies.\r\nThe technical analysis-focused rese… [+2155 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "Bitcoin jumps more than 10% as risk appetite ramps up on a pullback in the US dollar from 20-year highs",
                "description": "Bitcoin bounced above $21,000 for the first time in two weeks, helping the broader crypto market recapture a valuation of more than $1 trillion.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-today-cryptocurrencies-stocks-us-dollar-crypto-markets-ethereum-2022-9",
                "urlToImage": "https://i.insider.com/62faacfff16a0d0018e69ae1?width=1200&format=jpeg",
                "publishedAt": "2022-09-09T19:07:59Z",
                "content": "Bitcoin leapt to a two-week high Friday as a drop in the strong US dollar helped fuel a jump in stocks and other risk assets. \r\nBitcoin gained as much as 13% to $21,375.38, the first time the price h… [+2116 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "'Rich Dad Poor Dad' author Robert Kiyosaki warns of an imminent market crash - and says downturns are the best times to get rich",
                "description": "The personal-finance guru predicted stocks, bitcoin, and other assets would plunge in price, and urged investors to pounce on the bargains that emerge.",
                "url": "https://markets.businessinsider.com/news/stocks/robert-kiyosaki-rich-poor-dad-market-crash-stocks-bitcoin-bargains-2022-8",
                "urlToImage": "https://i.insider.com/5e8fb6e7dcd88c0adb5ccd65?width=1200&format=jpeg",
                "publishedAt": "2022-08-30T11:28:27Z",
                "content": "Robert Kiyosaki rang the alarm on an imminent market crash, and urged investors to pounce on the bargains that emerge, in a pair of recent tweets.\r\n\"All markets crashing: real estate, stocks, gold, s… [+1611 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "insider@insider.com (Ryan Austin)",
                "title": "Altcoins are the alternative digital currencies to bitcoin — here's what they are and how they work",
                "description": "Altcoins, or alternative coins, are any cryptocurrencies not bitcoin. Learn how altcoins emerged and evolved into a driving force in crypto markets.",
                "url": "https://www.businessinsider.com/personal-finance/what-is-altcoin",
                "urlToImage": "https://i.insider.com/6112cbf27ab071001878ec71?width=1200&format=jpeg",
                "publishedAt": "2022-09-20T21:08:35Z",
                "content": "Insider's experts choose the best products and services to help make smart decisions with your money (heres how). In some cases, we receive a commission from our our partners, however, our opinions a… [+17380 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "'Rich Dad Poor Dad' author Robert Kiyosaki says a historic market crash is looming - and touts crypto as the best defense",
                "description": "The personal-finance guru, who dismissed bitcoin as worthless in May, said it was vital for investors to get into crypto before the crash.",
                "url": "https://markets.businessinsider.com/news/stocks/rich-poor-dad-kiyosaki-stock-market-crash-dollar-crypto-bitcoin-2022-9",
                "urlToImage": "https://i.insider.com/5e2b32d662fa813e064000cb?width=1200&format=jpeg",
                "publishedAt": "2022-09-13T07:33:43Z",
                "content": "Investors are barreling towards a catastrophic market collapse, and should buy cryptocurrencies before they usurp the US dollar and transform the entire financial system, Robert Kiyosaki told his fol… [+1736 chars]"
            },
            {
                "source": { "id": null, "name": "The Guardian" },
                "author": "Dan Milmo Global technology editor",
                "title": "Ethereum cryptocurrency completes move to cut CO2 output by 99%",
                "description": "Software upgrade, known as ‘the merge’ will change how transactions are managed on its blockchainEthereum, the second largest cryptocurrency, has completed a plan to to reduce its carbon emissions by more than 99%.The software upgrade, known as “the merge”, w…",
                "url": "https://amp.theguardian.com/technology/2022/sep/15/ethereum-cryptocurrency-completes-move-to-cut-co2-output-by-99",
                "urlToImage": "https://i.guim.co.uk/img/media/b94312783bf87528ee069787516942236ff75cc9/0_478_3299_1978/master/3299.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5bebfe1763b93be825fc689aae2b8ed8",
                "publishedAt": "2022-09-15T09:27:53Z",
                "content": "Ethereum, the second largest cryptocurrency, has completed a plan to to reduce its carbon emissions by more than 99%.\r\nThe software upgrade, known as the merge, will change how transactions are manag… [+2826 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Michael Saylor's MicroStrategy buys the dip with fresh $6 million bitcoin purchase, adding to its crypto stockpile",
                "description": "As of September 22, MicroStrategy and its subsidiaries own about 130,000 bitcoins, bought at an average price of about $30,639, per Bloomberg.",
                "url": "https://markets.businessinsider.com/news/stocks/michael-saylor-microstrategy-buy-dip-million-bitcoin-cryptocurrency-eth-crypto-2022-9",
                "urlToImage": "https://i.insider.com/6329c0bc4f9291001883ce01?width=1200&format=jpeg",
                "publishedAt": "2022-09-20T14:31:20Z",
                "content": "MicroStrategy, helmed by famed bitcoin-bull Michael Saylor, purchased about $6 million in bitcoin between August 2 and September 19, a Tuesday SEC filing showed.\r\nThat's good for about 301 bitcoin, b… [+1049 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Breakingviews - Crypto fans still live in a supervised world - Reuters",
                "description": "Since the dawn of history, the person with the bigger stick could easily take the person with the smaller stick’s money. That, at least, is one of many philosophies espoused by MicroStrategy <a href=\"https://www.reuters.com/companies/MSTR.O\" target=\"_blank\">(…",
                "url": "https://www.reuters.com/breakingviews/crypto-fans-still-live-supervised-world-2022-09-01/",
                "urlToImage": "https://www.reuters.com/resizer/vOy11V_wY64gU_q3EqbuYOnSCs8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VM4CIQY7UFOWRNC6OYATOIQLK4.jpg",
                "publishedAt": "2022-09-01T15:13:00Z",
                "content": "NEW YORK, Sept 1 (Reuters Breakingviews) - Since the dawn of history, the person with the bigger stick could easily take the person with the smaller sticks money. That, at least, is one of many philo… [+1810 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Bitcoin falls below $19000 as cryptos creak under rate hike risk - Reuters",
                "description": "Cryptocurrencies fell to fresh lows on Monday on regulatory concerns and as investors globally turned shy on risky assets with interest rate rises looming around the world.",
                "url": "https://www.reuters.com/technology/bitcoin-falls-below-19000-cryptos-creak-under-rate-hike-risk-2022-09-19/",
                "urlToImage": "https://www.reuters.com/resizer/7vvHHpQvDtdEIXqXAS7vTw_ipPo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/36XAVNUD7ZKANCOL2HEUR2FOKU.jpg",
                "publishedAt": "2022-09-19T06:38:00Z",
                "content": "SINGAPORE, Sept 19 (Reuters) - Cryptocurrencies fell to fresh lows on Monday on regulatory concerns and as investors globally turned shy on risky assets with interest rate rises looming around the wo… [+1578 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Crypto law firm Roche Freedman fights to stay in bitcoin case after videos surface - Reuters",
                "description": "A hotly contested disqualification fight at the 11th U.S. Circuit Court of Appeals should provide a good indication of just how much damage the crypto law firm Roche Freedman is facing after last month’s revelation of surreptitious video recordings of name pa…",
                "url": "https://www.reuters.com/legal/transactional/crypto-law-firm-roche-freedman-fights-stay-bitcoin-case-after-videos-surface-2022-09-20/",
                "urlToImage": "https://www.reuters.com/resizer/Y3XdCfNWUjotxtL8RqJGQ2FseLg=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z2M2ZRGOCRO3BAGWH3Z34WGOEI.jpg",
                "publishedAt": "2022-09-20T21:33:00Z",
                "content": "(Reuters) - A hotly contested disqualification fight at the 11th U.S. Circuit Court of Appeals should provide a good indication of just how much damage the crypto law firm Roche Freedman is facing af… [+6936 chars]"
            },
            {
                "source": { "id": null, "name": "The Guardian" },
                "author": "Wilfred Chan",
                "title": "When bitcoin plunges, Buttcoin cheers: the online community praying for crypto’s death",
                "description": "A Reddit subforum for people who are horrified by the proliferation of crypto scams and pyramid schemes pokes fun at cryptocurrencyAs bitcoin plunged below $20,000 in mid-June, many cryptocurrency users were distraught over massive losses – with some reportin…",
                "url": "https://amp.theguardian.com/technology/2022/sep/09/bitcoin-buttcoin-online-community-praying-for-cryptos-death",
                "urlToImage": "https://i.guim.co.uk/img/media/99851280856d77238a9821994ddf0e3e55667603/0_201_4256_2554/master/4256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cc0b1a897f0762e211d0e2727d1ecd28",
                "publishedAt": "2022-09-09T05:00:24Z",
                "content": "As bitcoin plunged below $20,000 in mid-June, many cryptocurrency users were distraught over massive losses with some reporting they had lost their life savings. But one corner of the internet was ch… [+7205 chars]"
            },
            {
                "source": { "id": null, "name": "Slashdot.org" },
                "author": "msmash",
                "title": "Jamie Dimon Slams Crypto Tokens as 'Decentralized Ponzi Schemes'",
                "description": "Jamie Dimon didn't mince words when a US lawmaker mentioned the executive's history of criticizing cryptocurrencies. From a report: \"I'm a major skeptic on crypto tokens, which you call currency, like Bitcoin,\" the JPMorgan Chase chief executive officer said …",
                "url": "https://slashdot.org/story/22/09/22/1615228/jamie-dimon-slams-crypto-tokens-as-decentralized-ponzi-schemes",
                "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
                "publishedAt": "2022-09-22T20:00:00Z",
                "content": "This is also the same guy who says that everyone is more productive when they aren't working from home. Take everything he says with a HUGE grain of salt. I'm not talking pretzel-sized salt grains...… [+40 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Nasdaq bets big on digital assets despite crypto turmoil - Reuters",
                "description": "Nasdaq Inc <a href=\"https://www.reuters.com/companies/NDAQ.O\" target=\"_blank\">(NDAQ.O)</a> is placing a big bet on the cryptocurrency market, with the launch of a digital assets business that is aimed at tapping institutional investors.",
                "url": "https://www.reuters.com/business/finance/nasdaq-bets-big-digital-assets-despite-crypto-turmoil-2022-09-20/",
                "urlToImage": "https://www.reuters.com/resizer/vhmmMl1JCDu98U_lVwDA2ozDnQw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/V2YIMSMH2ZOCJKVDJB7M2YUIEI.jpg",
                "publishedAt": "2022-09-20T15:50:00Z",
                "content": "Sept 20 (Reuters) - Nasdaq Inc (NDAQ.O) is placing a big bet on the cryptocurrency market, with the launch of a digital assets business that is aimed at tapping institutional investors.\r\nThe new unit… [+1018 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Ethereum Merge nears final countdown as bitcoin and ether inch higher",
                "description": "The Ethereum Foundation has said the highly anticipated merge event is set to begin sometime around Wednesday or Thursday.",
                "url": "https://markets.businessinsider.com/news/currencies/ethereum-merge-final-countdown-bitcoin-price-btc-ether-price-eth-2022-9",
                "urlToImage": "https://i.insider.com/6321dd80d5916b0019abaa3e?width=1200&format=jpeg",
                "publishedAt": "2022-09-14T14:23:37Z",
                "content": "Ethereum's merge event is set to happen around Wednesday or Thursday, according to the Ethereum Foundation. \r\nAfter selling off roughly 10% on Tuesday following the August inflation data, prices for … [+1346 chars]"
            },
            {
                "source": { "id": null, "name": "Entrepreneur" },
                "author": "Gabrielle Bienasz",
                "title": "JPMorgan Chase CEO Calls Crypto Tokens Like Bitcoin 'Decentralized Ponzi Schemes'",
                "description": "Jamie Dimon testified at a hearing alongside other big-bank CEOs — and made pointed comments about crypto.",
                "url": "https://www.entrepreneur.com/business-news/jpmorgan-chase-ceo-on-crypto-decentralized-ponzi-schemes/435837",
                "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1663856200-MANDELNGANContributor.jpg",
                "publishedAt": "2022-09-22T15:05:00Z",
                "content": "The CEO of one of the largest banks in the world did not hold back on his opinion of cryptocurrency.\r\nMANDEL NGAN / Contributor / Getty Images\r\n\"They are decentralized Ponzi schemes,\" Jamie Dimon, CE… [+1657 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Central African Republic top court blocks purchases with new cryptocurrency - Reuters",
                "description": "Central African Republic's Constitutional Court on Monday ruled that the purchase of citizenship, \"e-residency\" and land using a cryptocurrency the government launched last month was unconstitutional.",
                "url": "https://www.reuters.com/technology/central-african-republic-top-court-blocks-purchases-with-new-cryptocurrency-2022-08-29/",
                "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=108",
                "publishedAt": "2022-08-29T18:10:00Z",
                "content": "BANGUI, Aug 29 (Reuters) - Central African Republic's Constitutional Court on Monday ruled that the purchase of citizenship, \"e-residency\" and land using a cryptocurrency the government launched last… [+1894 chars]"
            },
            {
                "source": { "id": "time", "name": "Time" },
                "author": "Allyson Versprille / Bloomberg",
                "title": "Crypto Mining Could Hurt Climate Progress, New White House Report Says",
                "description": "The White House says the environmental impact of producing cryptocurrencies like Bitcoin could impede US efforts to combat climate change.",
                "url": "https://time.com/6211780/crypto-mining-climate-white-house/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2022/09/crypto-mining-climate-white-house.jpg?quality=85&w=1200&h=628&crop=1",
                "publishedAt": "2022-09-08T17:54:00Z",
                "content": "The White House says the environmental impact of producing cryptocurrencies like Bitcoin could impede U.S. efforts to combat climate change.\r\nThe conclusion thrusts the Biden administration into the … [+3103 chars]"
            },
            {
                "source": { "id": null, "name": "Gizmodo.com" },
                "author": "Mack DeGeurin",
                "title": "Internationally Hunted Terraform Labs Co-Founder Do Kwon Says He’s ‘Making Zero Effort To Hide’",
                "description": "International crime-fighting agency Interpol reportedly issued a notice instructing law enforcement agencies worldwide to arrest Terraform Labs co-founder and CEO Do Kwon. Somehow, Kwon is still trying to convince the world, and likely himself, that he’s in f…",
                "url": "https://gizmodo.com/terra-stablecoin-do-kwon-crypto-red-notice-1849582877",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/548db7a43be6b7016915638c5084c114.jpg",
                "publishedAt": "2022-09-26T20:50:00Z",
                "content": "International crime-fighting agency Interpol reportedly issued a notice instructing law enforcement agencies worldwide to arrest Terraform Labs co-founder and CEO Do Kwon. Somehow, Kwon is still tryi… [+2402 chars]"
            },
            {
                "source": { "id": null, "name": "CNET" },
                "author": "Daniel Van Boom",
                "title": "The Ethereum Merge is Imminent. Here's Why It Matters - CNET",
                "description": "The Merge will see the second biggest blockchain, ethereum, adopt a proof of stake model. It's estimated to reduce the blockchain's energy use by over 99%.",
                "url": "https://www.cnet.com/personal-finance/crypto/the-ethereum-merge-is-imminent-heres-why-it-matters/",
                "urlToImage": "https://www.cnet.com/a/img/resize/7fb2e9ef7ecae570febaefcae5a499daf61e4530/hub/2022/07/14/70fe602c-0eca-4060-9e47-2375450b2ad9/gettyimages-1241390930.jpg?auto=webp&fit=crop&height=630&width=1200",
                "publishedAt": "2022-09-14T23:37:00Z",
                "content": "If you Google \"Ethereum Merge,\"you'll see a charming countdown clock depicting two pandas, one black and one white, slowly getting closer to each other. When the countdown hits zero, six hours from t… [+11176 chars]"
            },
            {
                "source": { "id": null, "name": "CNET" },
                "author": "Daniel Van Boom",
                "title": "Countdown to Ethereum Merge: What It Is and Why It's Important - CNET",
                "description": "Described as among the most important days in crypto, the ethereum blockchain this week adopts proof of stake -- lowering its carbon footprint by 99%.",
                "url": "https://www.cnet.com/personal-finance/crypto/countdown-to-ethereum-merge-what-it-is-and-why-its-important/",
                "urlToImage": "https://www.cnet.com/a/img/resize/e20cf953a1e584b3e9442bad7df0fd8dcd60d147/2022/07/14/70fe602c-0eca-4060-9e47-2375450b2ad9/gettyimages-1241390930.jpg?auto=webp&fit=crop&height=630&width=1200",
                "publishedAt": "2022-09-13T00:49:00Z",
                "content": "Google \"Ethereum Merge\" and you'll see a cute countdown clock depicting two pandas, one black and one white, slowly getting closer to each other. When the countdown hits zero some time on Sept. 14, t… [+11594 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
                "title": "Anthony Scaramucci says bear markets 'suck,' and Skybridge only took Sam-Bankman Fried's deal because of its 'mediocre' performance",
                "description": "Sam Bankman-Fried's acquisition of SkyBridge Capital means \"people don't think you're going out of business,\" Scaramucci said.",
                "url": "https://www.businessinsider.com/scaramucci-says-bear-markets-suck-sbf-deal-mediocre-performance-2022-9",
                "urlToImage": "https://i.insider.com/61a107831ca5280018116047?width=1200&format=jpeg",
                "publishedAt": "2022-09-13T11:35:03Z",
                "content": "Hedge fund manager Anthony Scaramucci lamented bear markets, saying they \"suck\" because of how much they've hurt his business. \r\nScaramucci told the Financial Times Monday that his company, SkyBridge… [+2159 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
                "title": "Anthony Scaramucci says bear markets 'suck,' and Skybridge only took Sam-Bankman Fried's deal because of its 'mediocre' performance",
                "description": "Sam Bankman-Fried's acquisition of SkyBridge Capital means \"people don't think you're going out of business,\" Scaramucci said.",
                "url": "https://markets.businessinsider.com/news/currencies/scaramucci-says-bear-markets-suck-sbf-deal-mediocre-performance-2022-9",
                "urlToImage": "https://i.insider.com/61a107831ca5280018116047?width=1200&format=jpeg",
                "publishedAt": "2022-09-13T11:35:03Z",
                "content": "Hedge fund manager Anthony Scaramucci lamented bear markets, saying they \"suck\" because of how much they've hurt his business. \r\nScaramucci told the Financial Times his company, SkyBridge Capital has… [+2164 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "Dow jumps more than 300 points as US stocks break 3-week losing streak after dollar falls from recent highs",
                "description": "Even small moves lower in both the US dollar and Treasury yields could have a big impact on different asset classes, according to Fairlead Strategies.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-break-losing-streak-dollar-falls-2022-9",
                "urlToImage": "https://i.insider.com/5f7b722594fce90018f7b2f4?width=1200&format=jpeg",
                "publishedAt": "2022-09-09T20:06:15Z",
                "content": "The Dow Jones Industrial Average soared more than 300 points on Friday, cementing a three-day rally and breaking a three-week losing streak as both the US dollar and Treasury yields took a breather f… [+2113 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "gglover@insider.com (George Glover)",
                "title": "MicroStrategy's Michael Saylor accused of dodging $25 million in DC tax after he showed off his luxury penthouse flat on Facebook",
                "description": "The District of Columbia's AG alleges Michael Saylor dodged $25 million in district taxes by claiming he lived in Florida, which has no state income tax.",
                "url": "https://markets.businessinsider.com/news/currencies/michael-saylor-microstrategy-bitcoin-tax-evasion-facebook-posts-penthouse-flat-2022-9",
                "urlToImage": "https://i.insider.com/62aa092a8eacc300192dd540?width=1200&format=jpeg",
                "publishedAt": "2022-09-01T09:51:16Z",
                "content": "MicroStrategy co-founder Michael Saylor has been hit with a lawsuit by the District of Columbia's attorney-general for allegedly evading more than $25 million in income taxes.\r\nThe lawsuit published … [+2689 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Galaxy Digital sued for $100 mln for ditching landmark Bitgo deal - Reuters",
                "description": "Galaxy Digital Holdings Ltd <a href=\"https://www.reuters.com/companies/GLXY.TO\" target=\"_blank\">(GLXY.TO)</a>, a crypto financial services firm, should pay at least $100 million in damages for walking away from its $1.2 billion takeover deal for BitGo Inc, th…",
                "url": "https://www.reuters.com/markets/us/galaxy-digital-sued-100-mln-ditching-landmark-bitgo-deal-2022-09-15/",
                "urlToImage": "https://www.reuters.com/resizer/teeHNzBsi9AMvly7f-Yg9luqB5w=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NR65SPJNYZIRFEOUYHVY2C3JOY.jpg",
                "publishedAt": "2022-09-15T21:52:00Z",
                "content": "WILMINGTON, Del, Sept 15 (Reuters) - Galaxy Digital Holdings Ltd (GLXY.TO), a crypto financial services firm, should pay at least $100 million in damages for walking away from its $1.2 billion takeov… [+2006 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "S&P says it could downgrade El Salvador in 6-18 months - Reuters.com",
                "description": "S&P Global Ratings said on Friday it could cut El Salvador's already negative credit rating within six to 18 months if it does not make \"adequate progress\" on debt reduction, days after the government announced plans to buy back sovereign bonds.",
                "url": "https://www.reuters.com/world/americas/sp-says-it-could-downgrade-el-salvador-6-18-months-2022-09-17/",
                "urlToImage": "https://www.reuters.com/resizer/bcBIaPPHo2LM5Xvz4D9ChqYLM7Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4ROJK3VULZL5NMXU3DRYT3UINU.jpg",
                "publishedAt": "2022-09-17T00:49:00Z",
                "content": "Sept 16 (Reuters) - S&amp;P Global Ratings said on Friday it could cut El Salvador's already negative credit rating within six to 18 months if it does not make \"adequate progress\" on debt reduction, … [+1962 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Ethereum blockchain has completed major software upgrade, co-founder says - Reuters",
                "description": "A major software upgrade to the Ethereum blockchain aimed at drastically reducing its energy usage has been completed, Vitalik Buterin, Ethereum inventor and co-founder tweeted on Thursday.",
                "url": "https://www.reuters.com/technology/ethereum-blockchain-has-completed-major-software-upgrade-co-founder-says-2022-09-15/",
                "urlToImage": "https://www.reuters.com/resizer/F81Dp-auWz2ULsuNYWSA54O0MI8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QMGLSVUGONLBVKM52FOAB3NOLY.jpg",
                "publishedAt": "2022-09-15T07:11:00Z",
                "content": "Sept 15 (Reuters) - A major software upgrade to the Ethereum blockchain aimed at drastically reducing its energy usage has been completed, Vitalik Buterin, Ethereum inventor and co-founder tweeted on… [+703 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Vitalik Buterin says Ethereum's merge slashes global energy consumption by 0.2%, making it one of the biggest decarbonization events ever",
                "description": "A report from the Crypto Carbon Ratings Institute found that the merge dramatically reduced Ethereum's carbon footprint.",
                "url": "https://markets.businessinsider.com/news/currencies/ethereum-merge-slashes-global-energy-consumption-vitalik-buterin-crypto-currency-2022-9",
                "urlToImage": "https://i.insider.com/63247253e555ad001852ebea?width=1200&format=jpeg",
                "publishedAt": "2022-09-16T13:48:18Z",
                "content": "The Ethereum merge this week slashed global energy consumption by 0.2%, Vitalik Buterin wrote in a tweet Thursday, citing a crypto researcher. \r\nThe long-awaited event successfully transformed the bl… [+1970 chars]"
            },
            {
                "source": { "id": null, "name": "VentureBeat" },
                "author": "Josh Drake, DFINITY",
                "title": "Jack Dorsey’s ‘Web5’ is a solution to a problem that’s already been solved",
                "description": "Jack Dorsey is pushing Web5, his decentralized data and identity platform. But decentralized identity tools already exist for Web3.",
                "url": "https://venturebeat.com/data-infrastructure/jack-dorseys-web5-is-a-solution-to-a-problem-thats-already-been-solved/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2019/08/puzzle.GettyImages-1036249246.jpg?w=1200&strip=all",
                "publishedAt": "2022-09-03T16:10:00Z",
                "content": "Were you unable to attend Transform 2022? Check out all of the summit sessions in our on-demand library now! Watch here. \r\nWeb3 thrives on its ability to provide both transparency and anonymity, but … [+1428 chars]"
            },
            {
                "source": { "id": null, "name": "Gizmodo.com" },
                "author": "Kyle Barr",
                "title": "Crypto.com Gave a Woman a $10.5 Million Refund and Now It Wants It Back",
                "description": "What would you do if a company accidentally sent you millions in dollars you never asked for? Well, Australia-based news outlet 7News reported Tuesday that Crypto.com, one of the most high-profile crypto platforms in the world, had made an extremely expensive…",
                "url": "https://gizmodo.com/crypto-com-bitcoin-matt-damon-australia-1849478202",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/492ff0ccb2b996700430d65856fc3c78.jpg",
                "publishedAt": "2022-08-31T14:40:00Z",
                "content": "What would you do if a company accidentally sent you millions in dollars you never asked for? Well, Australia-based news outlet 7News reported Tuesday that Crypto.com, one of the most high-profile cr… [+3124 chars]"
            },
            {
                "source": { "id": null, "name": "Substack.com" },
                "author": "0xStacker",
                "title": "Bitcoin is not a Store of Value",
                "description": "Before we begin, I’m not just some crypto FUDster. I’ve been in crypto for a long time. My first crypto purchases took place on an exchange called btc-e back in 2014 which later went up the river for laundering funds from the Mt Gox hack. I was a little altco…",
                "url": "https://cryptostackers.substack.com/p/bitcoin-is-not-a-store-of-value",
                "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ffdfab696-cf92-4334-adcd-957f78b18d94_1920x1080.png",
                "publishedAt": "2022-09-18T23:06:23Z",
                "content": "Before we begin, Im not just some crypto FUDster. Ive been in crypto for a long time. My first crypto purchases took place on an exchange called btc-e back in 2014 which later went up the river for l… [+24248 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "gglover@insider.com (George Glover)",
                "title": "Ethereum Merge has completed its long-awaited update, Buterin says",
                "description": "The merge moves the Ethereum blockchain to a proof-of-stake mechanism, slashing its energy usage and so making it more appealing to institutional investors.",
                "url": "https://markets.businessinsider.com/news/currencies/crypto-news-ethereum-finalizes-merge-upgrade-vitalik-buterin-says-bitcoin-2022-9",
                "urlToImage": "https://i.insider.com/615c3f521725d20018b7c5b8?width=1200&format=jpeg",
                "publishedAt": "2022-09-15T09:22:26Z",
                "content": "The Ethereum blockchain completed its long-awaited Merge update early Thursday morning, the crypto project's cofounder Vitalik Buterin has said.\r\nThe upgrade promises to cut energy consumption for th… [+2331 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "'Big Short' investor Michael Burry says the epic market crash he predicted is in full swing - and flags crypto, SPACs, and meme stocks as early victims",
                "description": "Burry, who repeatedly sounded the alarm on the boom in speculative assets, checked off his forecast of the bubble bursting as another correct call.",
                "url": "https://markets.businessinsider.com/news/stocks/big-short-michael-burry-meme-stocks-crypto-bubble-market-crash-2022-9",
                "urlToImage": "https://i.insider.com/6267b7d30bd64800192c32a6?width=1200&format=jpeg",
                "publishedAt": "2022-09-07T11:38:44Z",
                "content": "Michael Burry identified a market bubble of unprecedented size and scope last summer, and warned the investors buying into the hype and speculation to brace for a historic crash.\r\nThe fund manager of… [+2311 chars]"
            },
            {
                "source": { "id": null, "name": "Insiderintelligence.com" },
                "author": "insider@insider.com (Adriana Nunez)",
                "title": "Block extends Cash App's reach outside Square ecosystem",
                "description": "Cash App users can now pay on popular retail sites like American Eagle and JD Sports, which can help Block boost payments volume and revenues.",
                "url": "https://www.insiderintelligence.com/content/block-extends-cash-app-s-reach-outside-square-ecosystem",
                "urlToImage": "https://www.insiderintelligence.com/content/storage/socialsharingdefault/default-image-share.png?im=FitAndFill,width=1200,height=630",
                "publishedAt": "2022-09-06T14:02:31Z",
                "content": "The news: Cash App users can now make online payments via Cash App Pay\r\n to merchants that dont use Square, per TechCrunch. \r\n<ul><li>The Block-owned app partnered with major retail brands like Ameri… [+1874 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "insider@insider.com (Kevin L. Matthews II)",
                "title": "What to know about speculation: When investors buy high-risk assets with the expectation of significant returns",
                "description": "Speculation is the act of buying or selling assets that have an increased chance of significant losses. Here's what to know about this risky strategy.",
                "url": "https://www.businessinsider.com/personal-finance/what-is-speculation",
                "urlToImage": "https://i.insider.com/60f318b97b0ec5001800aa6a?width=1200&format=jpeg",
                "publishedAt": "2022-09-13T16:11:09Z",
                "content": "The bulk of investing advice, especially for those interested in retirement, centers around slow and consistent gains over decades. But not every investor is content with the prospect of patient long… [+6724 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Crypto regulation laggards spur arbitrage risk - French central banker - Reuters",
                "description": "Countries that are slow to build up regulations for crypto assets could create arbitrage risks that players operating globally could exploit, the head of France's central bank said on Tuesday.",
                "url": "https://www.reuters.com/technology/crypto-regulation-laggards-spur-arbitrage-risk-french-central-banker-2022-09-27/",
                "urlToImage": "https://www.reuters.com/resizer/wLX2Yah90Pw5MgTG_7foMDkF4DM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JA52XUN66BOPJN3RTWOHGGVCJQ.jpg",
                "publishedAt": "2022-09-27T12:04:00Z",
                "content": "PARIS, Sept 27 (Reuters) - Countries that are slow to build up regulations for crypto assets could create arbitrage risks that players operating globally could exploit, the head of France's central b… [+1314 chars]"
            },
            {
                "source": { "id": "wired", "name": "Wired" },
                "author": "Anthony Lydgate",
                "title": "Would You Ditch All This Chaos for a Country in the Cloud?",
                "description": "Balaji Srinivasan—technologist, investor, prophet, troll—says let the old world sink. Find your tribe and build your bespoke society, or get left behind.",
                "url": "https://www.wired.com/story/would-you-ditch-all-this-chaos-for-a-country-in-the-cloud/",
                "urlToImage": "https://media.wired.com/photos/630e61933dfe1372fb611109/191:100/w_1280,c_limit/WI100122_FF_Sovereign_01.jpg",
                "publishedAt": "2022-09-06T10:00:00Z",
                "content": "As he accrues hundreds of thousands more Twitter followers, Srinivasan dispenses short-term advice (work from home, cancel group events, ramp up testing capacity, stop making comparisons with the flu… [+4906 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Ethereum blockchain to undergo major upgrade to cut energy use - Reuters",
                "description": "A long-awaited software upgrade to the Ethereum blockchain aimed at slashing its huge energy consumption is expected this week, a move proponents say may widen the technology's use and support the price of the ether token.",
                "url": "https://www.reuters.com/technology/ethereum-blockchain-undergo-major-upgrade-cut-energy-use-2022-09-12/",
                "urlToImage": "https://www.reuters.com/resizer/HWiyTcArEAu74f-GanyvSnztwVs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OYINZBIBIBOH3H346ZR47RSZAU.jpg",
                "publishedAt": "2022-09-12T10:39:00Z",
                "content": "LONDON, Sept 12 (Reuters) - A long-awaited software upgrade to the Ethereum blockchain aimed at slashing its huge energy consumption is expected this week, a move proponents say may widen the technol… [+3142 chars]"
            },
            {
                "source": { "id": null, "name": "heise online" },
                "author": "Axel Kannenberg, mit Material der dpa",
                "title": "Bitcoin-Kurs fällt unter 19.000 US-Dollar",
                "description": "Kein Ende des Kryptowinters in Sicht: Der Bitcoin rutscht auf unter 19.000 US-Dollar ab und nähert sich seinem Jahrestief vom Juni.",
                "url": "https://www.heise.de/news/Bitcoinkurs-faellt-unter-19-000-US-Dollar-7256365.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/4/7/5/1/shutterstock_2155067343-cbab8f25fc8775f2.jpg",
                "publishedAt": "2022-09-07T13:16:00Z",
                "content": "Der Kurs des Bitcoins ist am Abend des Dienstags nach einer tagelangen Seitwärtsbewegung unter die Marke von 19.000 US-Dollar abgerutscht. Die älteste und bekannteste Kryptowährung erreichte Daten de… [+1594 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "FTX Ventures plans to take 30% stake in Scaramucci's SkyBridge Capital - Reuters.com",
                "description": "FTX Ventures plans to scoop up a 30% stake in SkyBridge Capital, the companies said, making it the latest in a flurry of deals by cryptocurrency's white knight Sam Bankman-Fried.",
                "url": "https://www.reuters.com/markets/us/ftx-ventures-plans-take-30-stake-scaramuccis-skybridge-capital-2022-09-09/",
                "urlToImage": "https://www.reuters.com/resizer/zPx2WMSTYuElLMv1Os9l3ArPP2E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BSGYVH6XH5J4ZNGCDKEOTYP6AA.jpg",
                "publishedAt": "2022-09-09T12:26:00Z",
                "content": "Sept 9 (Reuters) - FTX Ventures plans to scoop up a 30% stake in SkyBridge Capital, the companies said, making it the latest in a flurry of deals by cryptocurrency's white knight Sam Bankman-Fried.\r\n… [+1669 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Crypto exchange FTX to acquire bankrupt Voyager's assets - Reuters",
                "description": "Bankrupt crypto lender Voyager Digital said on Monday crypto exchange FTX has won an auction for its assets, in a bid valued at about $1.42 billion.",
                "url": "https://www.reuters.com/technology/crypto-exchange-ftx-acquire-bankrupt-voyagers-assets-2022-09-27/",
                "urlToImage": "https://www.reuters.com/resizer/GLwYtDbbE17f9A8RDxXAjEvEvg8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/J6QXSDOS6ZPK5PE7BMFYWRR434.jpg",
                "publishedAt": "2022-09-27T02:34:00Z",
                "content": "Sept 26 (Reuters) - Bankrupt crypto lender Voyager Digital said on Monday crypto exchange FTX has won an auction for its assets, in a bid valued at about $1.42 billion.\r\nFTX's bid comprises of a fair… [+1763 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Canada PM Trudeau attacks new Conservative leader as 'reckless' - Reuters Canada",
                "description": "Canadian Prime Minister Justin Trudeau on Monday attacked veteran lawmaker Pierre Poilievre, who was elected new leader of the opposing Conservative Party, for what Trudeau called \"reckless\" economic policies.",
                "url": "https://www.reuters.com/world/americas/canada-pm-trudeau-attacks-new-conservative-leader-reckless-2022-09-12/",
                "urlToImage": "https://www.reuters.com/resizer/hQVJoyIwlUFO3MX9yp-RAbqKVsY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CLKJWOOOQ5PEZFD4LJMV37JY5E.jpg",
                "publishedAt": "2022-09-12T21:13:00Z",
                "content": "Sept 12 (Reuters) - Canadian Prime Minister Justin Trudeau on Monday attacked veteran lawmaker Pierre Poilievre, who was elected new leader of the opposing Conservative Party, for what Trudeau called… [+1982 chars]"
            },
            {
                "source": { "id": null, "name": "Techinsights.com" },
                "author": null,
                "title": "SMIC reaches 7nm without access to western equipment and technologies",
                "description": "Comparison confirms that SMIC reaches 7nm without access to western equipment & technologies. Our analysis also uncovered many similarities between the SMIC 7nm and the TSMC 7nm, which are available in our comparison brief.",
                "url": "https://www.techinsights.com/blog/smic-7nm-truly-7nm-technology-how-it-compares-tsmc-7nm",
                "urlToImage": null,
                "publishedAt": "2022-08-29T15:52:10Z",
                "content": "Similarities with TSMC 7nm have been found\r\nSMIC's latest technology processor is 7nm\r\nWhy the leap from 14nm to 7nm took two years to achieve\r\nHow SMIC 7nm compares with the TSMC 7nm variant\r\nAfter … [+1847 chars]"
            },
            {
                "source": { "id": null, "name": "Barron's" },
                "author": "Jack Denton",
                "title": "White House Is Mulling a Ban on Bitcoin Mining",
                "description": "The White House has floated the possibility of limiting or eliminating the proof-of-work mechanism that underpins Bitcoin and its blockchain network.",
                "url": "https://www.barrons.com/articles/white-house-bitcoin-proof-of-work-mining-ban-51662728547",
                "urlToImage": "https://images.barrons.com/im-489169/social",
                "publishedAt": "2022-09-10T10:21:57Z",
                "content": "The White House has floated the possibility of limiting or eliminating the proof-of-work mechanism that underpins \r\nBitcoin\r\nand its blockchain networka move that would strike a blow at the heart of … [+1459 chars]"
            },
            {
                "source": { "id": null, "name": "Journal du geek" },
                "author": "Amandine Jonniaux",
                "title": "Le Bitcoin peut-il vraiment devenir neutre en carbone ?",
                "description": "Le Bitcoin peut-il vraiment devenir neutre en carbone ?\nLe Bitcoin peut-il vraiment devenir neutre en carbone ?",
                "url": "https://www.journaldugeek.com/2022/09/01/le-bitcoin-peut-il-vraiment-devenir-neutre-en-carbone/",
                "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/04/bitcoin-image.jpg",
                "publishedAt": "2022-09-01T13:00:17Z",
                "content": "Monnaie reine parmi les crypto, le Bitcoin souffre comme tous ses concurrents d’un problème de taille : il est (très) énergivore. L’impact écologique des monnaies non fiduciaires est devenu l’une des… [+1843 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Billionaire FTX chief Sam Bankman-Fried says hawkish Fed policy and the dollar's historic climb is weighing on crypto",
                "description": "At the SALT Conference in New York, the billionaire FTX chief discussed the strengthening dollar and crypto's bumpy year.",
                "url": "https://markets.businessinsider.com/news/currencies/ftx-sam-bankman-fried-fed-policy-dollar-hawkish-crypto-dip-2022-9",
                "urlToImage": "https://i.insider.com/6320b8c8e8b5000018510967?width=1200&format=jpeg",
                "publishedAt": "2022-09-13T17:27:06Z",
                "content": "Billionaire Sam Bankman-Fried said stringent monetary policy from the Fed and soaring inflation have weighed on cryptocurrencies this year. \r\n\"Dollars are up this year,\" Bankman-Fried said at the SAL… [+1176 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "Legendary investor Mark Mobius says the Fed will hike interest rates as high as 9% if inflation stays high",
                "description": "Mark Mobius thinks the Fed will hike rates as high as 9% to tame inflation, adding that it believe rates must be higher than inflation to bring it down.",
                "url": "https://markets.businessinsider.com/news/stocks/mark-mobius-interest-rates-could-hit-9-percent-borrowing-fed-2022-9",
                "urlToImage": "https://i.insider.com/6321e433e555ad0018529769?width=1200&format=jpeg",
                "publishedAt": "2022-09-14T15:18:29Z",
                "content": "The Federal Reserve could hike interest rates as high as 9%, according to Mark Mobius. \r\nThe famed investor told Bloomberg TV Wednesday that because inflation has remained persistently high, \"the Fed… [+1066 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "madams@businessinsider.com (Max Adams)",
                "title": "The market is laser focused on the Fed, but there are other risks investors are not pricing in as a possible recession looms",
                "description": "Investors have been hanging on the Fed's every word, but Morgan Stanley's investment chief says markets need to pay attention to other factors.",
                "url": "https://www.businessinsider.com/stock-market-inflation-federal-reserve-corporate-earnings-risk-mike-wilson-2022-8",
                "urlToImage": "https://i.insider.com/630fc2233fe7c40019e4c438?width=1200&format=jpeg",
                "publishedAt": "2022-09-01T10:10:00Z",
                "content": "Good morning, market watchers. Max Adams in for Phil Rosen today. While I can't match Phil's witticisms or quirky anecdotes, I do have this bit of wonderful news to share we're on the cusp of a long … [+4909 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "The Fed's rate hike was just the beginning as banks around the world adjust policy - but the uncertainty doesn't mean the market can't rally.",
                "description": "One firm still expects a 17% stock rally before a recession hits in 2023, even as the Fed hammers stocks with its interest rate hikes.",
                "url": "https://www.businessinsider.com/fed-rate-hike-central-banks-policy-inflation-stifel-stocks-rally-2022-9",
                "urlToImage": "https://i.insider.com/63248de5d5916b0019ac09af?width=1200&format=jpeg",
                "publishedAt": "2022-09-23T11:18:21Z",
                "content": "Happy Friday team. I'm Phil Rosen, reporting from New York. The Federal Reserve's Wednesday rate hike was just the beginning of the world's fight against inflation. A smattering of other central bank… [+5718 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "US stocks rise in a bid to rebound after a 3-week losing streak",
                "description": "Goldman Sachs said the US economy looks increasingly like it will avoid a recession despite the Fed's aggressive interest-rate hikes.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-dow-nasdaq-economy-fed-rates-powell-sp500-2022-9",
                "urlToImage": "https://i.insider.com/6295ef61f099c4001956cd27?width=1200&format=jpeg",
                "publishedAt": "2022-09-06T13:43:16Z",
                "content": "US stocks rose Tuesday as investors returned from the Labor Day weekend to assess where equities stand after a string of weekly losses. \r\nAll three of Wall Street's major stock indexes advanced follo… [+1393 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks dip after the ECB hikes rates and Fed Chair Powell backs hawkish stance",
                "description": "The European Central Bank increased benchmark rates by 75 basis points on Thursday, the biggest increase in its history.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-europe-ecb-raises-rates-powell-speaks-2022-9",
                "urlToImage": "https://i.insider.com/6319eca05a0e5a0018d30d9f?width=1200&format=jpeg",
                "publishedAt": "2022-09-08T13:39:07Z",
                "content": "US stocks fell at the open Thursday as the European Central Bank raised benchmark rates and investors digested remarks from Fed Chair Jerome Powell. \r\nThe ECB hiked rates by 75 basis points, the bigg… [+1282 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks fall as dollar and Treasury yields soar amid fallout from UK tax plan",
                "description": "US stocks ended Monday lower on further turmoil in the UK. US bond yields soared with the 10 year climbing as much as 21 basis points.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-stocks-fall-further-pound-falls-further-2022-9",
                "urlToImage": "https://i.insider.com/6331fc508345c90018ddf710?width=1200&format=jpeg",
                "publishedAt": "2022-09-26T20:05:18Z",
                "content": "US stocks ended Monday lower amid turmoil stemming from the reaction to the UK's new budget plan, which includes some of the steepest tax cuts in decades and has led to fears of worsening inflation a… [+1017 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "Legendary investor Mark Mobius says the Fed will hike interest rates as high as 9% if inflation stays high",
                "description": "Mark Mobius thinks the Fed will hike rates as high as 9% to tame inflation, adding that it believe rates must be higher than inflation to bring it down.",
                "url": "https://www.businessinsider.com/mark-mobius-interest-rates-could-hit-9-percent-borrowing-fed-2022-9",
                "urlToImage": "https://i.insider.com/6321e433e555ad0018529769?width=1200&format=jpeg",
                "publishedAt": "2022-09-14T15:18:29Z",
                "content": "The Federal Reserve could hike interest rates as high as 9%, according to Mark Mobius. \r\nThe famed investor told Bloomberg TV Wednesday that because inflation has remained persistently high, \"the Fed… [+1066 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "US stocks continue sell-off as traders brace for more Fed rate hikes later this week",
                "description": "Last week, global equities saw their worst five-day stretch since June as investors anticipate another jumbo rate hike from the Federal Reserve.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-slide-as-traders-brace-for-fed-hike-2022-9",
                "urlToImage": "https://i.insider.com/63286def4f92910018839bd3?width=1200&format=jpeg",
                "publishedAt": "2022-09-19T13:37:48Z",
                "content": "US stocks dropped Monday ahead of the Federal Reserve's two-day meeting, which begins Tuesday. The dip is a continuation of Friday's sell-off, in which indexes capped off their worst five-day stretch… [+1262 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "What crisis? High-stakes crypto lending looks here to stay - Reuters",
                "description": "On May 11, Scott Odell, an analyst at British crypto lender Blockchain.com, instant messaged Edward Zhao of Three Arrows Capital asking that the Singapore hedge fund repay at least part of a $270 million loan.",
                "url": "https://www.reuters.com/technology/what-crisis-high-stakes-crypto-lending-looks-here-stay-2022-09-21/",
                "urlToImage": "https://www.reuters.com/resizer/xPN0D5Xld5YlWL6G4_3t2WbfIEc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QF3AU25ZRFN7JBIHGNRJB6APFU.jpg",
                "publishedAt": "2022-09-21T05:13:00Z",
                "content": "LONDON/WASHINGTON, Sept 21 (Reuters) - On May 11, Scott Odell, an analyst at British crypto lender Blockchain.com, instant messaged Edward Zhao of Three Arrows Capital asking that the Singapore hedge… [+7813 chars]"
            },
            {
                "source": { "id": "vice-news", "name": "Vice News" },
                "author": "Edward Ongweso Jr, Jordan Pearson",
                "title": "Washington, DC Sues Tech Billionaire For Allegedly Evading $25M in Taxes by Pretending to Live in Florida",
                "description": "The lawsuit alleges Bitcoin-boosting billionaire Michael Saylor engaged in a scheme to dodge taxes and that his company MicroStrategy played a key role.",
                "url": "https://www.vice.com/en/article/n7z7a7/washington-dc-sues-billionaire-for-allegedly-faking-living-in-florida-to-avoid-dollar25m-in-taxes",
                "urlToImage": "https://video-images.vice.com/articles/630fd132fdbf0e009420f3f0/lede/1661981263024-gettyimages-1239809455.jpeg?image-resize-opts=Y3JvcD0xeHc6MC44NDI2eGg7MHh3LDAuMDQzOXhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
                "publishedAt": "2022-09-01T13:00:00Z",
                "content": "On Wednesday, the District of Columbia’s Attorney General Karl A. Racine announced that his office is suing MicroStrategy executive chairman and Bitcoin-boosting billionaire Michael Saylor for allege… [+5240 chars]"
            },
            {
                "source": { "id": null, "name": "Journal du geek" },
                "author": "Amandine Jonniaux",
                "title": "Au Salvador, l’adoption du bitcoin tourne à la catastrophe économique",
                "description": "Un après avoir adopté le bitcoin comme devise légale, le Salvador est au bord de la catastrophe économique. \nAu Salvador, l’adoption du bitcoin tourne à la catastrophe économique",
                "url": "https://www.journaldugeek.com/2022/09/12/au-salvador-ladoption-du-bitcoin-tourne-a-la-catastrophe-economique/",
                "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/04/bitcoin.jpg",
                "publishedAt": "2022-09-12T15:00:09Z",
                "content": "Un après avoir adopté le bitcoin comme devise légale, le Salvador est au bord de la catastrophe économique.Il y a tout juste un an, l’adoption du bitcoin par le Salvador sonnait comme une première mo… [+1784 chars]"
            },
            {
                "source": { "id": null, "name": "heise online" },
                "author": "Axel Kannenberg",
                "title": "Nach TerraUSD-Desaster: Strafverfolger wollen an die Bitcoins von Do Kwon",
                "description": "Südkoreas Behörden wollen 3313 Bitcoin einfrieren, die mit dem implodierten Stablecoin TerraUSD in Verbindung stehen. Dessen Macher wird per Interpol gesucht.",
                "url": "https://www.heise.de/news/Nach-TerraUSD-Desaster-Strafverfolger-wollen-an-die-Bitcoins-von-Do-Kwon-7278736.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/1/6/4/7/0/shutterstock_2154833429-26987f3d6f1c2c74.jpg",
                "publishedAt": "2022-09-28T15:43:00Z",
                "content": "Südkoreanische Strafverfolger wollen bei zwei Kryptobörsen Guthaben im Millionenwert einfrieren lassen, die in Verbindung mit dem über Interpol gesuchten Kryptowährungsunternehmer Do Kwon stehen soll… [+3193 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks drop as bond yields rise amid investor concerns over renewed Fed hawkishness",
                "description": "Stocks pared some losses but ended lower on the day as investors deal with concerns that the Fed will continue to aggressively raise rates next month.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-wall-street-interest-rate-hikes-fed-2022-8",
                "urlToImage": "https://i.insider.com/623b1e5ec9edc20019f5ed35?width=1200&format=jpeg",
                "publishedAt": "2022-08-29T20:06:02Z",
                "content": "US stocks closed lower on Monday while bond yields jumped as investors struggled with the Federal Reserve's drive to tame inflation with rate hikes. \r\nFed chair Jerome Powell did little to give Wall … [+1738 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks mixed with S&P 500 hitting a new low in 2022 as Fed officials defend hawkish policy",
                "description": "Minneapolis Fed President Neel Kashkari said at a Wall Street Journal event that the central bank's current rate hikes are \"appropriate.\"",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-2022-low-fed-defends-hawkish-2022-9",
                "urlToImage": "https://i.insider.com/5f36baabe89ebf001f044a3d?width=1200&format=jpeg",
                "publishedAt": "2022-09-27T20:16:56Z",
                "content": "US stocks closed mixed on Tuesday, with the S&amp;P 500 hitting a new 2022 low intraday as the broad index and the Dow Jones Industrial Average fell for a sixth day in a row.\r\nDuring the trading sess… [+1347 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "ajoyner@businessinsider.com (April Joyner)",
                "title": "SEC Chair Gary Gensler sends a message to crypto startup founders and VCs: 'This field will not take off unless you have some trust'",
                "description": "SEC Chair Gary Gensler said at the NYC Summit that he believes most cryptocurrencies are securities and fall under his agency's scope.",
                "url": "https://www.businessinsider.com/sec-gary-gensler-crypto-regulation-startups-vcs-tokens-securities-2022-9",
                "urlToImage": "https://i.insider.com/60fae0f30729770012b98ffc?width=1200&format=jpeg",
                "publishedAt": "2022-09-08T16:32:04Z",
                "content": "The crypto industry is not going to make it without increased regulation to build trust among investors and the general public, says Gary Gensler, the chair of the Securities and Exchange Commission.… [+1490 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks turn negative as markets digest job gains and new uncertainty in Europe's energy crisis",
                "description": "As investors digested the latest payroll numbers from August, Gazprom said it would delay the restart of the Nord Stream 1 gas pipeline.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-markets-reverse-gains-jobs-nord-stream-2022-9",
                "urlToImage": "https://i.insider.com/623b1e5ec9edc20019f5ed35?width=1200&format=jpeg",
                "publishedAt": "2022-09-02T20:06:00Z",
                "content": "US stocks turned lower at the close Friday as investors digested the August jobs numbers and fresh uncertainty in Europe's energy crisis. \r\nEarly in the day, payroll data showed a gain of 315,000 job… [+1585 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks rise as monthly jobs report eases some concerns over a hawkish Fed",
                "description": "The addition of 315,000 jobs last month was mostly in line with economists' expectations.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-new-jobs-numbers-fed-powell-inflation-2022-9",
                "urlToImage": "https://i.insider.com/6312058e3fe7c40019e4fcc2?width=1200&format=jpeg",
                "publishedAt": "2022-09-02T13:45:58Z",
                "content": "US stocks climbed Friday as the monthly jobs report eased concerns that the Federal Reserve will continue with extra-aggressive rate hikes. \r\nPayrolls grew by 315,000 in August, mostly in line with W… [+1515 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "mloh@businessinsider.com (Matthew Loh)",
                "title": "Elon Musk's crypto interview was broadcast on the South Korean government's YouTube channel that was hacked and renamed 'SpaceX Invest'",
                "description": "The breach on Saturday morning is the fourth time in the last two weeks that a YouTube channel run by the South Korean government was hacked.",
                "url": "https://www.businessinsider.com/elon-musk-crypto-interview-streams-hacked-south-korean-governments-youtube-2022-9",
                "urlToImage": "https://i.insider.com/631567f8ed92be0018c5dd1d?width=1200&format=jpeg",
                "publishedAt": "2022-09-05T03:48:07Z",
                "content": "The South Korean government's official YouTube channel was hacked on Saturday morning to broadcast a video featuring billionaire Elon Musk chatting about cryptocurrency, according to local media repo… [+1879 chars]"
            },
            {
                "source": { "id": null, "name": "Yahoo Entertainment" },
                "author": "USA TODAY",
                "title": "Lucky whale watchers have a chance encounter with humpback whales in California",
                "description": "Whale watchers off the coast of central California got lucky when they experienced a friendly encounter with three humpback whales.",
                "url": "https://news.yahoo.com/lucky-whale-watchers-chance-encounter-150833883.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ymjhKV5X5kap_eclX0kmDw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/hd/cp-video-transcode/production/d7333947-bda6-3031-bf95-e91bca49ac77/2022-09-13/15-09-26/2cdc094a-4fbe-5f11-932a-3ba85f5482bd/stream_1920x1080x0_v2_3_0.jpg",
                "publishedAt": "2022-09-13T15:08:33Z",
                "content": "prices were falling Tuesday after data showed U.S. inflation rose more than expected in Augustgiving traders their latest hint that the Federal Reserve will continue to tighten financial conditions i… [+458 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks edge higher after worst day for markets in 2 years as wholesale inflation dips",
                "description": "Producer Price Index data, which measures wholesale level prices, showed a decrease of 0.1% in August, matching expectations.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-mixed-wholesale-inflation-ppi-august-2022-9",
                "urlToImage": "https://i.insider.com/627d639b27d5960019ee5b01?width=1200&format=jpeg",
                "publishedAt": "2022-09-14T13:44:53Z",
                "content": "US stocks opened slightly higher Wednesday, a day after markets suffered their largest daily loss since 2020 on unexpectedly high consumer prices.\r\nFresh producer price index data, which measures who… [+1543 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks fall to extend Friday's steep declines as investors grapple with hawkish Fed policy outlook",
                "description": "US stocks slid Monday as investors continue to sell risk assets after Federal Reserve chair Jerome Powell reiterated a hawkish policy stance.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-tightening-powell-inflation-recession-2022-8",
                "urlToImage": "https://i.insider.com/624c999ebb219a00181bd106?width=1200&format=jpeg",
                "publishedAt": "2022-08-29T13:40:06Z",
                "content": "Us stocks opened lower Monday as investor sentiment remained sour following steep losses from Friday's session. \r\nFederal Reserve chair Jerome Powell remained steadfast in his Friday remarks in Wyomi… [+1788 chars]"
            },
            {
                "source": { "id": "business-insider", "name": "Business Insider" },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "Dow sinks more than 500 points in whiplash trading session after Fed raises interest rates by 75 basis points",
                "description": "\"There is a strong clustering within the dot-plots, showing all FOMC members are on board with this more hawkish narrative,\" ING Economics said.",
                "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-dow-500-fed-hikes-75-basis-points-2022-9",
                "urlToImage": "https://i.insider.com/632b6324dd40a400194ff974?width=1200&format=jpeg",
                "publishedAt": "2022-09-21T20:05:18Z",
                "content": "US stocks closed sharply lower in a whiplashed trading session on Wednesday after Federal Reserve Chairman Jerome Powell hiked interest rates by 75 basis points and signaled that more increases were … [+1435 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Big Divides - Reuters",
                "description": "A look at the day ahead in U.S. and global markets from Mike Dolan.",
                "url": "https://www.reuters.com/markets/europe/global-markets-view-usa-2022-09-15/",
                "urlToImage": "https://www.reuters.com/resizer/nldwXTVLOGyYqQ8YLBAVNTGj0ls=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5OVQG7Z2ENIFTHEIOPJOPRFFYI.jpg",
                "publishedAt": "2022-09-15T10:04:00Z",
                "content": "A look at the day ahead in U.S. and global markets from Mike Dolan.\r\nAs global markets reassess the U.S. interest rate horizon, yawning yield spreads, trade gaps and political divides underpin the do… [+4062 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "'The selling pressure is feeding on itself:' ARK, meme stocks tumble as Fed hike looms - Reuters.com",
                "description": "Sizzling inflation that helped send 2-year U.S. Treasury yields to fresh 14-year highs continued to burn some of the winners of the so-called pandemic bubble Friday.",
                "url": "https://www.reuters.com/markets/us/the-selling-pressure-is-feeding-itself-ark-meme-stocks-tumble-fed-hike-looms-2022-09-16/",
                "urlToImage": "https://www.reuters.com/resizer/sZ9HoaVL4EljbX_Pg_N8HU-VHtc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/R4ABOOJUNZJYJGVSZUT2HCSRRE.jpg",
                "publishedAt": "2022-09-16T16:38:00Z",
                "content": "Cathie Wood, Founder, CEO, and CIO of ARK Invest, speaks at the 2022 Milken Institute Global Conference in Beverly Hills, California, U.S., May 2, 2022. REUTERS/David Swanson\r\nRegister now for FREE u… [+2524 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Asian stocks extend rally; oil steadies at pre-invasion levels - Reuters",
                "description": "Asian stocks made broad gains on Thursday, extending an overnight global rally, while oil prices steadied at levels not seen since before Russia's invasion of Ukraine.",
                "url": "https://www.reuters.com/markets/europe/global-markets-wrapup-1-pix-2022-09-08/",
                "urlToImage": "https://www.reuters.com/resizer/ShppV12UBPZWC1lAEJSxzAbweyk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RUI7LFZEUVKM7PXTMUMUNGMY5M.jpg",
                "publishedAt": "2022-09-08T02:26:00Z",
                "content": "Sept 8 (Reuters) - Asian stocks made broad gains on Thursday, extending an overnight global rally, while oil prices steadied at levels not seen since before Russia's invasion of Ukraine.\r\nJapan's Nik… [+2085 chars]"
            },
            {
                "source": { "id": "reuters", "name": "Reuters" },
                "author": null,
                "title": "Dollar pushes towards fresh 24-year peak versus yen after U.S. CPI shock - Reuters.com",
                "description": "The dollar climbed close to a 24-year peak against the yen on Wednesday amid a jump in U.S. yields after hotter-than-expected inflation boosted bets for even more aggressive monetary tightening by the Federal Reserve next week.",
                "url": "https://www.reuters.com/markets/europe/dollar-pushes-towards-fresh-24-year-peak-versus-yen-after-us-cpi-shock-2022-09-14/",
                "urlToImage": "https://www.reuters.com/resizer/BByeQPB9vKRqglltxj-3M4Hklq0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HJ6GBHFNW5NTTJDX3LLXSYUN6Q.jpg",
                "publishedAt": "2022-09-14T01:04:00Z",
                "content": "TOKYO, Sept 14 (Reuters) - The dollar climbed close to a 24-year peak against the yen on Wednesday amid a jump in U.S. yields after hotter-than-expected inflation boosted bets for even more aggressiv… [+2348 chars]"
            },
            {
                "source": { "id": null, "name": "MakeUseOf" },
                "author": "Ponvang Bulus",
                "title": "What Is a Bitcoin Futures ETF? How Does It Differ From a Bitcoin Spot ETF?",
                "description": "Some crypto advocates want a Bitcoin spot ETF, but others aren't so sure.",
                "url": "https://www.makeuseof.com/what-is-bitcoin-futures-etf-how-differ-from-bitcoin-spot-etf/",
                "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/09/photo-of-hand-dropping-bitcoin-into-black-piggy-bank.jpg",
                "publishedAt": "2022-09-21T10:45:13Z",
                "content": "There is a long-standing struggle to create a Bitcoin spot exchange-traded fund (ETF). However, only Bitcoin futures ETFs have been approved so far, which leaves Bitcoin investors with more to look f… [+6364 chars]"
            }
        ]

    constructor(){
        super();
        console.log("Hello monkeynews");
        this.state  =  {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>Top headlines - Monkey News</h2>
                    <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}/>
                        </div>
                        })}
                    </div>
                
                </div>
            </div>
        );
    }
}

export default News;