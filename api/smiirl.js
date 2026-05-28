export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://tiktok-scraper7.p.rapidapi.com/user/info?unique_id=splosh_competitions",
      {
        headers: {
          "X-RapidAPI-Key": "c9ecf7756bmsh5ea9280de2d867dp10b377jsnd5ad668d8f2c",
          "X-RapidAPI-Host": "tiktok-scraper7.p.rapidapi.com",
        },
      }
    );

    const data = await response.json();

    const followers =
      data?.data?.stats?.followerCount ||
      data?.data?.stats?.follower_count ||
      0;

    res.status(200).json({
      number: followers,
    });
  } catch (error) {
    res.status(500).json({
      number: 0,
      error: error.message,
    });
  }
}
