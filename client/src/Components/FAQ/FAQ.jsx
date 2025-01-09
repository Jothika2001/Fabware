import { useState } from "react";
import images from "../../assets/images";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./FAQ.css";

function FAQ() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="FAQ">
        <div className="faq-title">
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className="faq-content">
          <div className="questions">
            {/* Question 1 */}
            <h4 onClick={() => handleQuestionClick(0)}>
              <img
                src={
                  openQuestionIndex === 0 ? images.darkBlueDot : images.blueDot
                }
                alt=""
              />
              <div>What materials can the Fabware Lint Roller be used on?</div>
              <img
                src={
                  openQuestionIndex === 0 ? images.upArrow : images.downArrow
                }
                alt=""
              />
            </h4>
            {openQuestionIndex === 0 && (
              <p>
                The Fabware Lint Roller can be used on materials like clothing,
                upholstery, and bedding.
              </p>
            )}

            {/* Question 2 */}
            <h4 onClick={() => handleQuestionClick(1)}>
              <img
                src={
                  openQuestionIndex === 1 ? images.darkBlueDot : images.blueDot
                }
                alt=""
              />
              <div>How many sheets are included in the value pack?</div>
              <img
                src={
                  openQuestionIndex === 1 ? images.upArrow : images.downArrow
                }
                alt=""
              />
            </h4>
            {openQuestionIndex === 1 && (
              <p>
                Each Fabware Lint Roller value pack comes with 1 handle and 1
                refill, totaling 60 sticky sheets.
              </p>
            )}

            {/* Question 3 */}
            <h4 onClick={() => handleQuestionClick(2)}>
              <img
                src={
                  openQuestionIndex === 2 ? images.darkBlueDot : images.blueDot
                }
                alt=""
              />
              <div>
                Is the handle reusable, and how do I replace the roller?
              </div>
              <img
                src={
                  openQuestionIndex === 2 ? images.upArrow : images.downArrow
                }
                alt=""
              />
            </h4>
            {openQuestionIndex === 2 && (
              <p>
                Yes, the handle is reusable, and you can replace the roller by
                snapping a new refill onto the handle.
              </p>
            )}

            {/* Question 4 */}
            <h4 onClick={() => handleQuestionClick(3)}>
              <img
                src={
                  openQuestionIndex === 3 ? images.darkBlueDot : images.blueDot
                }
                alt=""
              />
              <div>
                Can the Fabware Lint Roller be used on delicate fabrics?
              </div>
              <img
                src={
                  openQuestionIndex === 3 ? images.upArrow : images.downArrow
                }
                alt=""
              />
            </h4>
            {openQuestionIndex === 3 && (
              <p>
                The Fabware Lint Roller is safe for use on delicate fabrics.
              </p>
            )}

            {/* Question 5 */}
            <h4 onClick={() => handleQuestionClick(4)}>
              <img
                src={
                  openQuestionIndex === 4 ? images.darkBlueDot : images.blueDot
                }
                alt=""
              />
              <div>How do I peel off the used sheets?</div>
              <img
                src={
                  openQuestionIndex === 4 ? images.upArrow : images.downArrow
                }
                alt=""
              />
            </h4>
            {openQuestionIndex === 4 && (
              <p>
                To peel off used sheets, simply locate the perforated edge and
                pull to remove.
              </p>
            )}
          </div>
          <img src={images.faqMain} alt="" className="faq-main-img" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default FAQ;
