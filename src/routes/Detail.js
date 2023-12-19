import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2//movie_details.json?movie_id=${id}`)
      ).json();
      setDetail(json.data.movie);
      setLoading(false);
    };
    getDetail();
  }, [id]);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Movie
          key={detail.id}
          id={detail.id}
          coverImg={detail.medium_cover_image}
          title={detail.title}
          summary={detail.description_full}
          genres={detail.genres}
        />
      )}
    </>
  );
}

export default Detail;
