import { Banner } from "./Banner"
// import { BlogOne } from "./BlogOne"
import { BrandOne } from "./BrandOne"
// import { BuyTicket } from "./BuyTicket"
// import { CTAOne } from "./CTAOne"
// import { EventDirection } from "./EventDirection"
// import { EventOne } from "./EventOne"
// import { GalleryOne } from "./GalleryOne"
// import { ScheduleOne } from "./ScheduleOne"
// import { ServicesOne } from "./ServicesOne"
import { SlidingText } from "./SlidingText"
// import { TeamOne } from "./TeamOne"

export const HomeMain = () => {
  return (
    <>
        <Banner />
        {/* <ServicesOne /> */}
        <SlidingText />
        {/* <EventOne /> */}
        {/* <BuyTicket /> */}
        {/* <TeamOne /> */}
        {/* <EventDirection /> */}
        {/* <GalleryOne /> */}
        {/* <ScheduleOne /> */}
        <BrandOne />
        {/* <BlogOne /> */}
        {/* <CTAOne /> */}
    </>
  )
}
