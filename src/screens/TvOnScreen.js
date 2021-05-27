import React, { useEffect, useState } from "react";
import { Button, CardDeck, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../components/Loader";
import Message from "./../components/Message";
import { onTvShow } from "./../actions/tvActions";
import TvShow from "../components/TvShow";

const TvOnScreen = () => {
   const dispatch = useDispatch();
   const [paginate, setPaginate] = useState(1);
   const onTvShows = useSelector((state) => state.onTvShows);
   var { loading, error, onTvshows, page, total_pages } = onTvShows;
   useEffect(() => {
      dispatch(onTvShow(paginate));
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
               <h1>Currently Airing TV Shows</h1>
               {loading ? (
                  <Loader />
               ) : error ? (
                  <Message variant="danger">{error}</Message>
               ) : (
                  <Row>
                     {onTvshows.map((tvShow) => (
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

export default TvOnScreen;
