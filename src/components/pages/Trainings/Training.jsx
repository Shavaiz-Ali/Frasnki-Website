import HeroTraining from "./Trainings-sections/Hero-trainings";
import Programs from "./Trainings-sections/Programs";
export function Training() {
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <h2>Our Products</h2>
          <p>
            If you need help, please don't hesitate to contact us. We're here to
            help you succeed.
          </p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}

      {/* importing other product files  */}
      <HeroTraining/>
      <Programs />
    </>
  );
}
