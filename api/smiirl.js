export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://tiktok-scraper7.p.rapidapi.com/user/info?unique_id=splosh_competitions",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "c9ecf7756bmsh5ea9280de2d867dp10b377jsnd5ad668d8f2c",
          "x-rapidapi-host": "tiktok-scraper7.p.rapidapi.com"
        }
      }
    );

    const raw = await response.text();

    let data = {};

    try {
      data = JSON.parse(raw);
    } catch (e) {
      return res.status(500).json({
        number: 0,
        error: "Invalid JSON",
        raw
      });
    }

    const followers =
      data?.data?.stats?.followerCount ||
      data?.data?.stats?.follower_count ||
      data?.stats?.followerCount ||
      data?.stats?.follower_count ||
      0;

    res.status(200).json({
      number: followers,
      debug: data
    });

  } catch (error) {
    res.status(500).json({
      number: 0,
      error: error.message
    });
  }
}
