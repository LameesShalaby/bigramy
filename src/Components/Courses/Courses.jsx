import { useFetch } from "../../hooks/useFetch";
import { FaRegStar, FaShoppingCart } from "react-icons/fa";
import "./Courses.css";
const Courses = ({ selectedFilter }) => {
  const { data, loading, error } =
    useFetch(`http://3.65.32.166/api/v2/storefront/products?populate=*&'}
  `);

  const filteredData =
    selectedFilter === "All"
      ? data
      : data?.filter((item) => item.category === selectedFilter);
  console.log(data);
  return (
    <>
      <div className="row">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {filteredData && (
          <>
            {filteredData.map((item) => (
              <div className="col-lg-3 mb-3" key={item.id}>
                <div className="card p-2">
                  <div className="img">
                    <img
                      src={`http://3.65.32.166/${item.attributes.course?.image_url}`}
                      alt=""
                    />
                  </div>
                  <div className="text p-2">
                    <h4>{item.attributes.name}</h4>
                    <p>{item.attributes.description}</p>
                    <span>
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />({item.attributes.num_of_reviews})
                    </span>
                    <h4>
                      {item.attributes.price} {item.attributes.currency}
                    </h4>
                    <div className="d-flex justify-content-space-between align-items-center">
                      <div className="btn btn-success w-100">Pay</div>
                      <FaShoppingCart />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Courses;
