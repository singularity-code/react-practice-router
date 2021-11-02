import React from "react";
import qs from "qs";

const About = ({ location }) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      {showDetail && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis
          lacinia nibh aliquam mattis. Duis tincidunt eros nec nisi dapibus
          iaculis. Suspendisse dignissim metus nec odio mattis volutpat. Sed
          eget vehicula lacus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Sed a venenatis libero. Sed
          ullamcorper elit sit amet neque aliquam, in fermentum diam auctor.
          Suspendisse vulputate elit at ligula ultricies, sed feugiat quam
          egestas. Phasellus ac felis congue tellus pulvinar imperdiet.
          Suspendisse tempor ac tellus eu rhoncus. Pellentesque risus ligula,
          elementum sed turpis vitae, posuere aliquet nibh. Mauris ac maximus
          quam. Donec ut ultrices augue. Donec vulputate laoreet feugiat. Donec
          tincidunt, libero vel tincidunt pulvinar, augue ante ultricies ante,
          id lacinia felis dui a dolor. Maecenas ultricies enim eget eros
          lacinia tristique. Praesent eleifend eleifend lectus, interdum
          venenatis massa. Fusce non congue metus. Phasellus quis tellus id elit
          scelerisque posuere. Fusce dui odio, molestie vel leo nec, feugiat
          pellentesque velit. Donec quis semper est, vel elementum nulla.
          Quisque ullamcorper vestibulum faucibus. Vivamus id ipsum erat. Proin
          tristique turpis tincidunt, pharetra diam sit amet, fringilla quam.
          Morbi efficitur urna ut lorem ultrices, ut ullamcorper sapien
          placerat. Aliquam ac lectus facilisis libero finibus porta. Vivamus ut
          tempor est. Aenean auctor felis vel tellus semper, cursus viverra nibh
          pellentesque. Cras eleifend, sapien in ultricies euismod, enim ipsum
          convallis erat, quis hendrerit ipsum mi at justo. Praesent a pretium
          nibh.{" "}
        </p>
      )}
    </div>
  );
};

export default About;
