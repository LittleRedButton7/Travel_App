# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Vacation.destroy_all


lou = User.create(username: "Lucky Lou", email: "luckylou@gmail.com")
marissa = User.create(username: "Motivated Marissa", email: "motivatedmarissa@gmail.com")

mountain = Vacation.create(location_name: "Aspen", main_image: "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltfe6e8fae7d0d5ef9/5fda5f951688a075156a34b6/US_Aspen_US_Header.jpg", accommodataion_image: "https://images.trvl-media.com/hotels/2000000/1330000/1328600/1328567/8951563d_z.jpg", climate: "Snowy. Great for a ski weekend!", user: lou)
beach = Vacation.create(location_name: "Coco Beach", main_image: "https://t.realgeeks.media/thumbnail/iR5gRRtnPlVTojv5f651mVQEJWc=/trim:top-left:50/https://property-images.realgeeks.com/comlist/dd13e45288985757295dda81f43f6ea0.jpg", accommodataion_image: "https://images.rentalo.com/Cocoa-Beach-Hotels-353775-5656447l.jpg", climate: "Warm. Family fun in the sun!", user: lou)
city = Vacation.create(location_name: "New York", main_image: "https://www.thebalancecareers.com/thmb/PsG0_bvGnJ-npJiq8RYiEO6WTT4=/3435x2576/smart/filters:no_upscale()/high-angle-view-of-lower-east-side-manhattan-downtown--new-york-city--usa-640006562-5ae52a273de423003776ae2e.jpg", accommodataion_image: "http://aweinclusive.com/wp-content/uploads/2015/05/4851917482_47bfef6f58_b-1.jpg", climate: "Muggy. Protect your neck!", user: marissa)
desert = Vacation.create(location_name: "Mojave Desert", main_image: "https://s.wsj.net/public/resources/images/OD-BK289_ISRAEL_P_20160503160524.jpg", accommodataion_image: "https://i.pinimg.com/originals/5d/c5/75/5dc5752d77f5bfbfb7af52c358036a9d.jpg", climate: "H-O-T!! Bring your own water!", user: marissa)