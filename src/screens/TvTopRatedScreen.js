import React, { useEffect, useState } from "react";
import { Button, CardDeck, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../components/Loader";
import Message from "./../components/Message";
import { latestTvShows } from "./../actions/tvActions";
import TvShow from "../components/TvShow";

const TvTopRatedScreen = () => {
   const dispatch = useDispatch();
   const [paginate, setPaginate] = useState(1);
   const latestTv = useSelector((state) => state.latestTv);
   var { loading, error, tvShows, page, total_pages } = latestTv;
   useEffect(() => {
      dispatch(latestTvShows(paginate));
   }, [dispatch, paginate]);

   const next = () => {
      if (page < total_pages) {
         setPaginate(page + 1);
      }
   };
   const prev = () => {
      if (page <= total_pages) {
         setPaginate(page - 1);
      }
   };
   return (
      <>
         <Row>
            <Col sm={4}>
               <div className="d-flex"></div>
            </Col>
            <Col sm={4}></Col>
            <Col sm={4}>
               <div className="d-flex flex-row-reverse">
                  <Button onClick={next}>Next{" >"}</Button>
                  &nbsp;
                  {paginate > 1 && <Button onClick={prev}>{"< "}Prev</Button>}
               </div>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
               <h1>Top Rated TV Shows</h1>
               {loading ? (
                  <Loader />
               ) : error ? (
                  <Message variant="danger">{error}</Message>
               ) : (
                  <Row>
                     {tvShows.map((tvShow) => (
                        <Col key={tvShow.id} sm={12} md={6} lg={4} xl={2}>
                           <CardDeck>
                              <TvShow tvShow={tvShow} />
                           </CardDeck>
                        </Col>
                     ))}
                  </Row>
               )}
            </Col>
         </Row>
      </>
   );
};

export default TvTopRatedScreen;
