import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const Features = () => {
  return (
    <>
      <section className="container features">
        <div className="row">
          <div className="col-12 heading">
            <h1>Features</h1>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>

          <div className="col-12 content pt-4">
            <Tabs
              defaultActiveKey="home"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="home" title="Simple Bookmarking">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio alias dignissimos cum laborum? Molestias
                      itaque, odit culpa ducimus commodi laudantium!
                    </p>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio alias dignissimos cum laborum? Molestias
                      itaque, odit culpa ducimus commodi laudantium!
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Speedy Searching">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio alias dignissimos cum laborum? Molestias itaque,
                  odit culpa ducimus commodi laudantium!
                </p>
              </Tab>
              <Tab eventKey="longer-tab" title="Easy Sharing">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio alias dignissimos cum laborum? Molestias itaque,
                  odit culpa ducimus commodi laudantium!
                </p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};
