import React, { useEffect, useState } from "react";
import { Button, CardDeck, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../components/Loader";
import Message from "./../components/Message";
import { airingTvShow } from "./../actions/tvActions";
import TvShow from "../components/TvShow";

const TvAiringTodayScreen = () => {
   const dispatch = useDispatch();
   const [paginate, setPaginate] = useState(1);
   const airingTodayTvShows = useSelector((state) => state.airingTodayTvShows);
   var { loading, error, atvshows, page, total_pages } = airingTodayTvShows;
   useEffect(() => {
      dispatch(airingTvShow(paginate));
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
               <h1>TV Shows Airing Today</h1>
               {loading ? (
                  <Loader />
               ) : error ? (
                  <Message variant="danger">{error}</Message>
               ) : (
                  <Row>
                     {atvshows.map((tvShow) => (
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

export default TvAiringTodayScreen;
