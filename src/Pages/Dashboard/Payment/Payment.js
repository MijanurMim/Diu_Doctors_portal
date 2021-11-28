import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Elements } from "../../src";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JypzGF3HRZp6ADgum8urof4Z2tRMXCz8RZUNWkm0sVDPXveLxJVqSfBR9PczFeYrS3Ko4041uIgtZ7PHEHIOaT700IGdBs7Cu"
);

const Payment = () => {
  const { appointmentId } = useParams();

  const [appointment, setAppointment] = useState({});

  console.log(appointmentId);

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);

  return (
    <div>
      <h2>
        Please Pay for : {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>Pay :{appointment.price}</h4>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
