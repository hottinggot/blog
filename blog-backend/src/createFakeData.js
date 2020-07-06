import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body:
      'Libraries Zoe: The missing companion for Kafka Zoe is a command-line tool written in Kotlin to interact with kafka in an easy and intuitive waygithub.com Kotlin Spark API This project gives Kotlin bindings and several extensions for Apache Spark. Right now it is in beta stage, and JetBrains is searching for feedback before they submit a PR to the official Apache Spark repository. github.com Contribute We rely on sponsors to offer quality content every Sunday. If you would like to submit a sponsored link contact us. If you want to submit an article for the next issue, please do also drop us an email.',
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
