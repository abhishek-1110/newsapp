import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  //   articles = [
  //     {
  //       source: {
  //         id: "cnn",
  //         name: "CNN",
  //       },
  //       author: "Jackie Wattles",
  //       title:
  //         "This dwarf planet has a ring instead of a moon, and scientists don't know why - CNN",
  //       description:
  //         "Recent telescope data revealed that a small planet in the far reaches of our solar system has a dense ring round it, and scientists are baffled as to why.",
  //       url: "https://www.cnn.com/2023/02/08/world/dwarf-planet-rings-moon-mystery-scn/index.html",
  //       urlToImage:
  //         "https://media.cnn.com/api/v1/images/stellar/prod/230207155340-dwarf-planet-rings-moon-mystery-quaoar.jpg?c=16x9&q=w_800,c_fill",
  //       publishedAt: "2023-02-09T08:07:00Z",
  //       content:
  //         "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nRecent telescope data revealed that a small planet in … [+3908 chars]",
  //     },
  //     {
  //       source: {
  //         id: "fox-news",
  //         name: "Fox News",
  //       },
  //       author: "Elizabeth Pritchett",
  //       title:
  //         "Turkey, Syria earthquake claims at least 15000 lives as hope for survivors fades - Fox News",
  //       description:
  //         "At least 15,000 people have died in the 7.8-magnitude earthquake that hit Turkey and Syria on Monday. The catastrophic event also left 60,000 injured and tens of thousands displaced.",
  //       url: "https://www.foxnews.com/world/turkey-syria-earthquake-claims-15000-lives-hope-survivors-fades",
  //       urlToImage:
  //         "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/AP23039664705829.jpg",
  //       publishedAt: "2023-02-09T08:02:00Z",
  //       content:
  //         "While rescuers in Turkey and Syria continue to search for survivors after Monday's 7.8-magnitude earthquake, hopes of finding more people alive in the rubble three days after the disaster are startin… [+3951 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "CNBC",
  //       },
  //       author: "Jihye Lee",
  //       title:
  //         "Asia-Pacific markets trade mixed as investors weigh risks of more hikes ahead - CNBC",
  //       description:
  //         "Investors assessed further risks of more rate hikes to come after Fed Governor Christopher Waller",
  //       url: "https://www.cnbc.com/2023/02/09/asia-pacific-markets-set-to-fall-as-investors-weigh-risks-of-more-hikes-ahead.html",
  //       urlToImage:
  //         "https://image.cnbcfm.com/api/v1/image/107159436-1669859699359-gettyimages-1243950696-yuen-hongkong221013_npN6J.jpeg?v=1675900654&w=1920&h=1080",
  //       publishedAt: "2023-02-09T07:55:00Z",
  //       content:
  //         "Fed Governor Christopher Waller on Wednesday talked tough on inflation, warning that the fight is not over and could result in higher interest rates than markets are anticipating.\r\nSpeaking to an agr… [+950 chars]",
  //     },
  //     {
  //       source: {
  //         id: "the-washington-post",
  //         name: "The Washington Post",
  //       },
  //       author: "Rachel Pannett, Kareem Fahim",
  //       title:
  //         "Turkey-Syria earthquakes death toll passes 15,000 - The Washington Post",
  //       description:
  //         "Frustration is growing over the speed of the disaster response in both countries. The United Nations is hoping to reopen its only aid corridor to Syria Thursday.",
  //       url: "https://www.washingtonpost.com/world/2023/02/09/turkey-syria-earthquake-death-count-updates/",
  //       urlToImage:
  //         "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3IVKYRSB6UBEYCR2RIW6RVNM2Y.jpg&w=1440",
  //       publishedAt: "2023-02-09T07:30:28Z",
  //       content:
  //         "Comment on this story\r\nAnger and despair are mounting in Turkey as the death toll from a pair of major earthquakes in the country and neighboring Syria climbs above 15,000, with survivors and opposit… [+4260 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "KTLA Los Angeles",
  //       },
  //       author: "Tyler Wornell",
  //       title:
  //         "NewsNation reporter released from jail after arrest - KTLA Los Angeles",
  //       description:
  //         "Correspondent Evan Lambert was giving a live report during NewsNation’s “Rush Hour” when he was taken into custody.",
  //       url: "https://ktla.com/news/newsnation-reporter-released-from-jail-after-arrest/",
  //       urlToImage:
  //         "https://ktla.com/wp-content/uploads/sites/4/2023/02/Evan-Lambert-Arrest.png?w=1280",
  //       publishedAt: "2023-02-09T07:15:36Z",
  //       content:
  //         "EAST PALESTINE, Ohio (NewsNation) A NewsNation reporter was released from jail late Wednesday after being arrested earlier in the day during a news conference being held by Ohio’s governor about a tr… [+4725 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "ESPN",
  //       },
  //       author: null,
  //       title:
  //         "Sources - Suns acquiring Kevin Durant in blockbuster deal with Nets - ESPN",
  //       description:
  //         "Phoenix is acquiring Brooklyn's Kevin Durant and T.J. Warren in exchange for Mikal Bridges, Cam Johnson, Jae Crowder, four first-round picks and a 2028 pick swap, sources told ESPN's Adrian Wojnarowski.",
  //       url: "https://www.espn.com/nba/story/_/id/35620592/phoenix-suns-acquiring-kevin-durant-blockbuster-deal-brooklyn-nets",
  //       urlToImage:
  //         "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0712%2Fnba_durant%2Dphoenix_16x9.jpg",
  //       publishedAt: "2023-02-09T06:25:23Z",
  //       content:
  //         "The Phoenix Suns are acquiring 13-time NBA All-Star Kevin Durant in a blockbuster trade with the Brooklyn Nets, sources told ESPN's Adrian Wojnarowski early Thursday.\r\nPhoenix is sending Mikal Bridge… [+4545 chars]",
  //     },
  //     {
  //       source: {
  //         id: "reuters",
  //         name: "Reuters",
  //       },
  //       author: null,
  //       title:
  //         "Australia orders checks on Chinese-made cameras in defence offices - Reuters.com",
  //       description:
  //         "The Australian government will examine surveillance technology used in offices of the defence department, Defence Minister Richard Marles said on Thursday, amid reports that Chinese-made cameras installed there posed a security risk.",
  //       url: "https://www.reuters.com/world/asia-pacific/australia-orders-review-into-chinese-made-cameras-defence-offices-2023-02-09/",
  //       urlToImage:
  //         "https://www.reuters.com/resizer/jYmiVYy0fLoGD_UuF2A1eAqMzV8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UGTXZBJBJJN35FM7ZVWSU3NFWQ.jpg",
  //       publishedAt: "2023-02-09T06:24:00Z",
  //       content:
  //         "SYDNEY/BEIJING, Feb 9 (Reuters) - The Australian government will examine surveillance technology used in offices of the defence department, Defence Minister Richard Marles said on Thursday, amid repo… [+3397 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "CNBC",
  //       },
  //       author: "Jamie Knodel",
  //       title: "Fetterman hospitalized after feeling lightheaded - CNBC",
  //       description:
  //         '"Initial tests did not show evidence of a new stroke," the senator\'s staff says.',
  //       url: "https://www.cnbc.com/2023/02/09/sen-john-fetterman-hospitalized-after-feeling-lightheaded.html",
  //       urlToImage:
  //         "https://image.cnbcfm.com/api/v1/image/107191630-1675921190901-gettyimages-1244654514-MIDTERMS2022-PENNSYVLVANIA.jpeg?v=1675921363&w=1920&h=1080",
  //       publishedAt: "2023-02-09T05:42:43Z",
  //       content:
  //         'Sen. John Fetterman was hospitalized Wednesday after feeling lightheaded, his staff said.\r\n"Initial tests did not show evidence of a new stroke," said Joe Calvello, the communications director for th… [+1660 chars]',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "The Athletic",
  //       },
  //       author: "John Hollinger",
  //       title:
  //         "Hollinger: Russell Westbrook trade might be too late but sets up Lakers for future - The Athletic",
  //       description:
  //         "The Lakers, post-trade, should be a bit better than they were before. Did it justify the investment they made of a future first-rounder?",
  //       url: "https://theathletic.com/4170734/2023/02/09/hollinger-lakers-trade-russell-westrbook/",
  //       urlToImage:
  //         "https://cdn.theathletic.com/app/uploads/2023/02/08233841/230208-Lakers-Wolves-scaled-e1675917560491-1024x681.jpg",
  //       publishedAt: "2023-02-09T05:32:50Z",
  //       content:
  //         "Four of the top seven players in minutes for the 2022 Minnesota Timberwolves will soon play for the Los Angeles Lakers. Can a return to Minneapolis be far behind? A Josh Okogie acquisition? Whither G… [+10608 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Fox Business",
  //       },
  //       author: "Ken Martin",
  //       title: "Twitter outage leaves many users unable to tweet - Fox Business",
  //       description:
  //         "Twitter suffered an outage on Wednesday that prevented users from sending tweets or follow other users.",
  //       url: "https://www.foxbusiness.com/technology/twitter-outage-many-users-unable-tweet",
  //       urlToImage:
  //         "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/03/0/0/Twitter-logo-A.jpg?ve=1&tl=1",
  //       publishedAt: "2023-02-09T05:32:35Z",
  //       content:
  //         'Twitter suffered an outage on Wednesday that prevented users from sending a tweet, following accounts or accessing their direct messages.\r\n"Twitter may not be working as expected for some of you. Sor… [+1515 chars]',
  //     },
  //     {
  //       source: {
  //         id: "techcrunch",
  //         name: "TechCrunch",
  //       },
  //       author: "Ivan Mehta",
  //       title:
  //         "Twitter Blue introduces 4000 character tweets, says half ads coming soon - TechCrunch",
  //       description:
  //         "Twitter announced the ability to post longer tweets for paid users Wednesday. Paid subscribers can now post 4,000 characters long tweets.",
  //       url: "https://techcrunch.com/2023/02/08/twitter-blue-introduces-4000-character-tweets-says-half-ads-coming-soon/",
  //       urlToImage:
  //         "https://techcrunch.com/wp-content/uploads/2022/10/birds-talking-2.jpg?resize=1200,645",
  //       publishedAt: "2023-02-09T04:04:00Z",
  //       content:
  //         "Twitter announced the ability to post longer tweets for paid users Wednesday. So instead of being limited to 280 characters, Blue subscribers can post tweets that are up to 4,000 characters long. The… [+1791 chars]",
  //     },
  //     {
  //       source: {
  //         id: "cnn",
  //         name: "CNN",
  //       },
  //       author: "Phil Mattingly",
  //       title:
  //         "Biden says US-China relations have not taken a hit in wake of spy balloon shoot down - CNN",
  //       description:
  //         "President Joe Biden said in a new interview that the recently recovered Chinese spy balloon that traversed the continental US did not damage bilateral relations between the two countries.",
  //       url: "https://www.cnn.com/2023/02/08/politics/biden-us-china-spy-balloon/index.html",
  //       urlToImage:
  //         "https://media.cnn.com/api/v1/images/stellar/prod/230209063416-joe-biden-020823.jpg?c=16x9&q=w_800,c_fill",
  //       publishedAt: "2023-02-09T03:43:00Z",
  //       content:
  //         "President Joe Biden said in a new interview that the recently recovered Chinese spy balloon that traversed the continental US did not damage bilateral relations between the two countries. \r\nThe idea … [+4017 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "CNET",
  //       },
  //       author: "Carrie Mihalcik",
  //       title:
  //         "Google's ChatGPT Rival, Bard, Called Out For NASA Webb Space Telescope Error - CNET",
  //       description:
  //         "A demonstration meant to show off Google's new AI-powered chatbot bungles its response on the JWST.",
  //       url: "https://www.cnet.com/science/space/googles-chatgpt-rival-bard-called-out-for-nasa-webb-space-telescope-error/",
  //       urlToImage:
  //         "https://www.cnet.com/a/img/resize/bb78bd48417f7e5c55f9edb9f09bb8c825b7ea4c/hub/2022/04/15/32b089bd-0635-49e7-813b-e3d2410c60c1/google-logo-2022-443.jpg?auto=webp&fit=crop&height=630&width=1200",
  //       publishedAt: "2023-02-09T03:36:49Z",
  //       content:
  //         "After being unveiled earlier this week, Google's AI service Bard is already being called out for sharing inaccurate information in a demonstration meant to show off the tool's abilities. \r\nGoogle on … [+2040 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "YouTube",
  //       },
  //       author: null,
  //       title: "Hogwarts Legacy: How to Open Arithmancy Puzzle Doors - IGN",
  //       description:
  //         "If you’ve explored Hogwarts, there’s a good chance you have encountered the large wooden puzzle doors that are surrounded by strange beast symbols and locked...",
  //       url: "https://www.youtube.com/watch?v=ySBImttv8hw",
  //       urlToImage: "https://i.ytimg.com/vi/ySBImttv8hw/maxresdefault.jpg",
  //       publishedAt: "2023-02-09T03:00:26Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: "cnn",
  //         name: "CNN",
  //       },
  //       author: "Dan Heching",
  //       title:
  //         "Elizabeth Banks knows risk of new movie 'Cocaine Bear' could come back and bite her - CNN",
  //       description:
  //         'With her bonkers new movie "Cocaine Bear," Elizabeth Banks knew she wanted "to make something muscular and masculine."',
  //       url: "https://www.cnn.com/2023/02/08/entertainment/elizabeth-banks-cocaine-bear/index.html",
  //       urlToImage:
  //         "https://media.cnn.com/api/v1/images/stellar/prod/230208140517-elizabeth-banks-file.jpg?c=16x9&q=w_800,c_fill",
  //       publishedAt: "2023-02-09T02:52:00Z",
  //       content:
  //         "With her bonkers new movie Cocaine Bear, Elizabeth Banks knew she wanted to make something muscular and masculine.\r\nIn a new interview with Variety published on Wednesday, Banks who directed and copr… [+1184 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "BBC News",
  //       },
  //       author: "https://www.facebook.com/bbcnews",
  //       title: "NHS to use test that prevents babies going deaf - BBC",
  //       description:
  //         "Commonly used antibiotics can seriously damage the hearing of some babies.",
  //       url: "https://www.bbc.com/news/health-64570089",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/1564/production/_128567450_gettyimages-1444106108.jpg",
  //       publishedAt: "2023-02-09T02:46:45Z",
  //       content:
  //         "A rapid test that can help preserve the hearing of newborn babies is set to be used by NHS hospitals. \r\nFor some babies, commonly used antibiotics can become toxic. The drugs damage sensory cells ins… [+2645 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "BBC News",
  //       },
  //       author: "https://www.facebook.com/bbcnews",
  //       title:
  //         "Disney to cut 7,000 jobs in shake-up of entertainment giant - BBC",
  //       description:
  //         "The cuts come as boss Bob Iger presented his set of financial figures since his shock return to the firm.",
  //       url: "https://www.bbc.com/news/business-64576228",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/E242/production/_127722975_gettyimages-1046772050.jpg",
  //       publishedAt: "2023-02-09T02:22:29Z",
  //       content:
  //         "Disney chief executive Bob Iger says he is cutting 7,000 jobs as part of a major shake-up of the entertainment giant.\r\nThe layoffs are part of a plan to save $5.5bn in costs and make the Disney+ stre… [+2547 chars]",
  //     },
  //     {
  //       source: {
  //         id: "cbs-news",
  //         name: "CBS News",
  //       },
  //       author: "C Mandler",
  //       title:
  //         "How Kareem Abdul-Jabbar really feels about LeBron James breaking his NBA scoring record - CBS News",
  //       description:
  //         "\"LeBron said we don't have a relationship. He's right—and for that I blame myself,\" Abdul-Jabbar wrote.",
  //       url: "https://www.cbsnews.com/news/kareem-abdul-jabbar-lebron-james-nba-scoring-record-lakers/",
  //       urlToImage:
  //         "https://assets3.cbsnewsstatic.com/hub/i/r/2023/02/09/0fb11619-7c1b-41e0-9391-61b00dbfba67/thumbnail/1200x630/bf8a23c1b27eb71421a1aedfc13fb6f6/gettyimages-1246889861.jpg",
  //       publishedAt: "2023-02-09T02:05:00Z",
  //       content:
  //         "Los Angeles Lakers legend Kareem Abdul-Jabbar shared his thoughts Wednesday on LeBron James breaking his iconic NBA regular season scoring record, penning an honest and at times emotional essay on hi… [+3522 chars]",
  //     },
  //   ];

  static defaultProps = {
    heading: "News Headlines",
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    heading: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = this.props.heading + " - News App";
  }

  // fetching more data
  fetchMoreData = async () => {
    this.setState({
      page: ++this.state.page,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), // concating new articles
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  // making a function to update news or making the code shorter
  // async updateNews() {}

  // using componentdidmount -- this method runs after render() function
  async componentDidMount() {
    this.props.setProgress(20);
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
     // this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      //console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
      this.props.setProgress(100);

    } catch (e) {
      console.log("Something went wrong", e);
    }
  }

  // handlePrevClick = async () => {
  //   let parsedData;
  //   try {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=$${this.props.apiKey}&page=${
  //       this.state.page - 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     parsedData = await data.json();
  //   } catch (e) {
  //     console.log("Something went wrong", e);
  //   }
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };

  // handleNextClick = async () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   ) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=$${this.props.apiKey}&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();

  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false,
  //     });
  //   }
  // };

  /* use this when you are calling a function because you are using class components */

  Dateformatter = (a) => {
    const d = new Date(a);
    return d.toGMTString();
  };

  render() {
    return (
      <div className="container my-3">
          {/* <button
            disabled={this.state.page <= 1}
            className="btn btn-primary me-md-2"
            type="button"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button> */}
          <h2 className="text-center">Top Headlines - {this.props.heading}</h2>

          {/* <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-primary"
            type="button"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button> */}
        {/*{this.state.loading && <Spinner />}*/}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.articles.length < this.state.totalResults
          }
          loader={this.state.loading && <Spinner />}
          scrollableTarget="scrollableDiv"
        >
          <div className="row">
            {this.state.articles &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={
                        element.title ? element.title.slice(0, 45) + "..." : ""
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 88) + "..."
                          : "Not available"
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxtJ19p2MnrCfF8EnqnmJQgIK_hcfs3eJIEP1EAof4Q&s"
                      }
                      newsUrl={element.url}
                      source={element.source.name}
                      publishedAt={this.Dateformatter(element.publishedAt)}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary me-md-2"
            type="button"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-primary"
            type="button"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
