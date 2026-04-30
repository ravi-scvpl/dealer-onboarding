const categories = [
  {
    name: "categories/gcid:aadhar_center",
    displayName: "Aadhaar center",
  },
  {
    name: "categories/gcid:abarth_dealer",
    displayName: "Abarth dealer",
  },
  {
    name: "categories/gcid:abbey",
    displayName: "Abbey",
  },
  {
    name: "categories/gcid:aboriginal_and_torres_strait_islander_organisation",
    displayName: "Aboriginal and Torres Strait Islander organisation",
  },
  {
    name: "categories/gcid:aboriginal_art_gallery",
    displayName: "Aboriginal art gallery",
  },
  {
    name: "categories/gcid:abortion_clinic",
    displayName: "Abortion clinic",
  },
  {
    name: "categories/gcid:abrasives_supplier",
    displayName: "Abrasives supplier",
  },
  {
    name: "categories/gcid:absorbent_supplier",
    displayName: "Absorbent Supplier",
  },
  {
    name: "categories/gcid:abundant_life_church",
    displayName: "Abundant Life church",
  },
  {
    name: "categories/gcid:acai_shop",
    displayName: "Açaí shop",
  },
  {
    name: "categories/gcid:acaraje_restaurant",
    displayName: "Acaraje restaurant",
  },
  {
    name: "categories/gcid:accountant",
    displayName: "Accountant",
  },
  {
    name: "categories/gcid:accounting_firm",
    displayName: "Accounting firm",
  },
  {
    name: "categories/gcid:accounting_school",
    displayName: "Accounting school",
  },
  {
    name: "categories/gcid:accounting_software_company",
    displayName: "Accounting Software Company",
  },
  {
    name: "categories/gcid:acoustical_consultant",
    displayName: "Acoustical consultant",
  },
  {
    name: "categories/gcid:acrobatic_diving_pool",
    displayName: "Acrobatic diving pool",
  },
  {
    name: "categories/gcid:acrylic_store",
    displayName: "Acrylic Dealer",
  },
  {
    name: "categories/gcid:acupuncture_clinic",
    displayName: "Acupuncture clinic",
  },
  {
    name: "categories/gcid:acupuncture_school",
    displayName: "Acupuncture school",
  },
  {
    name: "categories/gcid:acupuncturist",
    displayName: "Acupuncturist",
  },
  {
    name: "categories/gcid:acura_dealer",
    displayName: "Acura dealer",
  },
  {
    name: "categories/gcid:addiction_treatment_center",
    displayName: "Addiction Rehabilitation Centre",
  },
  {
    name: "categories/gcid:adhesives_and_glue_supplier",
    displayName: "Adhesives & Glue Supplier",
  },
  {
    name: "categories/gcid:administrative_attorney",
    displayName: "Administrative attorney",
  },
  {
    name: "categories/gcid:adoption_agency",
    displayName: "Adoption agency",
  },
  {
    name: "categories/gcid:adult_day_care_center",
    displayName: "Adult Day Care Centre",
  },
  {
    name: "categories/gcid:adult_dvd_store",
    displayName: "Adult DVD shop",
  },
  {
    name: "categories/gcid:adult_education_school",
    displayName: "Adult education centre",
  },
  {
    name: "categories/gcid:adult_entertainment_club",
    displayName: "Adult entertainment club",
  },
  {
    name: "categories/gcid:adult_entertainment_store",
    displayName: "Adult entertainment store",
  },
  {
    name: "categories/gcid:adult_foster_care_service",
    displayName: "Adult foster care service",
  },
  {
    name: "categories/gcid:adventure_sports",
    displayName: "Adventure sports",
  },
  {
    name: "categories/gcid:adventure_sports_center",
    displayName: "Adventure Sports Center",
  },
  {
    name: "categories/gcid:advertising_agency",
    displayName: "Advertising agency",
  },
  {
    name: "categories/gcid:advertising_photographer",
    displayName: "Advertising Photographer",
  },
  {
    name: "categories/gcid:aerated_drinks_supplier",
    displayName: "Aerated Drinks Supplier",
  },
  {
    name: "categories/gcid:aerial_installation_service",
    displayName: "Antenna service",
  },
  {
    name: "categories/gcid:aerial_photographer",
    displayName: "Aerial photographer",
  },
  {
    name: "categories/gcid:aerial_sports_center",
    displayName: "Aerial Sports Center",
  },
  {
    name: "categories/gcid:aero_dance_class",
    displayName: "Aero dance class",
  },
  {
    name: "categories/gcid:aerobics_instructor",
    displayName: "Aerobics Class",
  },
  {
    name: "categories/gcid:aeroclub",
    displayName: "Aero Club",
  },
  {
    name: "categories/gcid:aeromodel_shop",
    displayName: "Aeromodel shop",
  },
  {
    name: "categories/gcid:aeronautical_engineer",
    displayName: "Aeronautical engineer",
  },
  {
    name: "categories/gcid:aerospace_company",
    displayName: "Aerospace company",
  },
  {
    name: "categories/gcid:afghani_restaurant",
    displayName: "Afghani restaurant",
  },
  {
    name: "categories/gcid:african_goods_store",
    displayName: "African goods shop",
  },
  {
    name: "categories/gcid:african_restaurant",
    displayName: "African restaurant",
  },
  {
    name: "categories/gcid:after_school_program",
    displayName: "After-school programme",
  },
  {
    name: "categories/gcid:agenzia_entrate",
    displayName: "Agenzia Entrate",
  },
  {
    name: "categories/gcid:aggregate_supplier",
    displayName: "Aggregate supplier",
  },
  {
    name: "categories/gcid:agistment_service",
    displayName: "Agistment service",
  },
  {
    name: "categories/gcid:agricultural_association",
    displayName: "Agricultural association",
  },
  {
    name: "categories/gcid:agricultural_cooperative",
    displayName: "Agricultural cooperative",
  },
  {
    name: "categories/gcid:agricultural_engineer",
    displayName: "Agricultural Engineer",
  },
  {
    name: "categories/gcid:agricultural_high_school",
    displayName: "Agricultural high school",
  },
  {
    name: "categories/gcid:agricultural_loan_agency",
    displayName: "Agricultural Loan Agency",
  },
  {
    name: "categories/gcid:agricultural_machinery_manufacturer",
    displayName: "Agricultural machinery manufacturer",
  },
  {
    name: "categories/gcid:agricultural_organization",
    displayName: "Agricultural organisation",
  },
  {
    name: "categories/gcid:agricultural_product_wholesaler",
    displayName: "Agricultural Product Wholesaler",
  },
  {
    name: "categories/gcid:agricultural_production",
    displayName: "Agricultural production",
  },
  {
    name: "categories/gcid:agricultural_service",
    displayName: "Agricultural service",
  },
  {
    name: "categories/gcid:agriculture_cooperative",
    displayName: "Agriculture cooperative",
  },
  {
    name: "categories/gcid:agrochemicals_supplier",
    displayName: "Agrochemicals Supplier",
  },
  {
    name: "categories/gcid:aikido_club",
    displayName: "Aikido club",
  },
  {
    name: "categories/gcid:aikido_school",
    displayName: "Aikido school",
  },
  {
    name: "categories/gcid:air_compressor_repair_service",
    displayName: "Air compressor repair service",
  },
  {
    name: "categories/gcid:air_compressor_supplier",
    displayName: "Air compressor supplier",
  },
  {
    name: "categories/gcid:air_conditioning_contractor",
    displayName: "Air conditioning contractor",
  },
  {
    name: "categories/gcid:air_conditioning_repair_service",
    displayName: "Air conditioning repair shop",
  },
  {
    name: "categories/gcid:air_conditioning_store",
    displayName: "Air conditioning store",
  },
  {
    name: "categories/gcid:air_conditioning_system_supplier",
    displayName: "Air conditioning system supplier",
  },
  {
    name: "categories/gcid:air_duct_cleaning_service",
    displayName: "Air duct cleaning service",
  },
  {
    name: "categories/gcid:air_filter_supplier",
    displayName: "Air filter supplier",
  },
  {
    name: "categories/gcid:air_force_base",
    displayName: "Air force base",
  },
  {
    name: "categories/gcid:air_taxi",
    displayName: "Air taxi",
  },
  {
    name: "categories/gcid:airbrushing_service",
    displayName: "Airbrushing service",
  },
  {
    name: "categories/gcid:airbrushing_supply_store",
    displayName: "Airbrushing supply shop",
  },
  {
    name: "categories/gcid:aircraft_dealer",
    displayName: "Aircraft dealer",
  },
  {
    name: "categories/gcid:aircraft_maintenance_company",
    displayName: "Aircraft maintenance company",
  },
  {
    name: "categories/gcid:aircraft_manufacturer",
    displayName: "Aircraft Manufacturer",
  },
  {
    name: "categories/gcid:aircraft_rental_service",
    displayName: "Aircraft Rental Agency",
  },
  {
    name: "categories/gcid:aircraft_supply_store",
    displayName: "Aircraft supply shop",
  },
  {
    name: "categories/gcid:airline",
    displayName: "Airline",
  },
  {
    name: "categories/gcid:airline_ticket_agency",
    displayName: "Airline ticket agency",
  },
  {
    name: "categories/gcid:airplane_exhibit",
    displayName: "Aeroplane",
  },
  {
    name: "categories/gcid:airport",
    displayName: "Airport",
  },
  {
    name: "categories/gcid:airport_shuttle_service",
    displayName: "Airport Shuttle Service Provider",
  },
  {
    name: "categories/gcid:airsoft_gun_shop",
    displayName: "Airsoft Supply Shop",
  },
  {
    name: "categories/gcid:airstrip",
    displayName: "Airstrip",
  },
  {
    name: "categories/gcid:alcohol_manufacturer",
    displayName: "Alcohol Manufacturer",
  },
  {
    name: "categories/gcid:alcohol_retail_monopoly",
    displayName: "Alcohol retail monopoly",
  },
  {
    name: "categories/gcid:alcoholic_beverage_wholesaler",
    displayName: "Alcoholic Beverage Wholesaler",
  },
  {
    name: "categories/gcid:alcoholism_treatment_program",
    displayName: "Alcoholism treatment programme",
  },
  {
    name: "categories/gcid:alfa_romeo_dealer",
    displayName: "Alfa Romeo dealer",
  },
  {
    name: "categories/gcid:allergist",
    displayName: "Allergist",
  },
  {
    name: "categories/gcid:alliance_church",
    displayName: "Alliance church",
  },
  {
    name: "categories/gcid:alsace_restaurant",
    displayName: "Alsace restaurant",
  },
  {
    name: "categories/gcid:alternative_fuel_station",
    displayName: "Alternative Petrol Station",
  },
  {
    name: "categories/gcid:alternative_medicine_clinic",
    displayName: "Alternative Medicine Clinic",
  },
  {
    name: "categories/gcid:alternative_medicine_practitioner",
    displayName: "Alternative medicine practitioner",
  },
  {
    name: "categories/gcid:alternator_supplier",
    displayName: "Alternator supplier",
  },
  {
    name: "categories/gcid:aluminium_supplier",
    displayName: "Aluminium Supplier",
  },
  {
    name: "categories/gcid:aluminum_frames_supplier",
    displayName: "Aluminium Frames Supplier",
  },
  {
    name: "categories/gcid:aluminum_welder",
    displayName: "Aluminium Welder",
  },
  {
    name: "categories/gcid:aluminum_window",
    displayName: "Aluminium Window",
  },
  {
    name: "categories/gcid:amateur_theatre",
    displayName: "Amateur theater",
  },
  {
    name: "categories/gcid:ambulance_service",
    displayName: "Ambulance service",
  },
  {
    name: "categories/gcid:american_grocery_store",
    displayName: "American grocery store",
  },
  {
    name: "categories/gcid:american_restaurant",
    displayName: "American restaurant",
  },
  {
    name: "categories/gcid:amish_furniture_store",
    displayName: "Amish Furniture Shop",
  },
  {
    name: "categories/gcid:ammunition_supplier",
    displayName: "Ammunition supplier",
  },
  {
    name: "categories/gcid:amphitheatre",
    displayName: "Amphitheatre",
  },
  {
    name: "categories/gcid:amusement_center",
    displayName: "Amusement Centre",
  },
  {
    name: "categories/gcid:amusement_machine_supplier",
    displayName: "Amusement machine supplier",
  },
  {
    name: "categories/gcid:amusement_park",
    displayName: "Amusement park",
  },
  {
    name: "categories/gcid:amusement_park_ride",
    displayName: "Amusement park ride",
  },
  {
    name: "categories/gcid:amusement_ride_supplier",
    displayName: "Amusement Ride Supplier",
  },
  {
    name: "categories/gcid:an_hui_restaurant",
    displayName: "Anhui restaurant",
  },
  {
    name: "categories/gcid:anago_restaurant",
    displayName: "Anago restaurant",
  },
  {
    name: "categories/gcid:andalusian_restaurant",
    displayName: "Andalusian restaurant",
  },
  {
    name: "categories/gcid:andhra_restaurant",
    displayName: "Andhra restaurant",
  },
  {
    name: "categories/gcid:anesthesiologist",
    displayName: "Anaesthetist",
  },
  {
    name: "categories/gcid:anganwadi_center",
    displayName: "Anganwadi center",
  },
  {
    name: "categories/gcid:angler_fish_restaurant",
    displayName: "Angler fish restaurant",
  },
  {
    name: "categories/gcid:anglican_church",
    displayName: "Anglican church",
  },
  {
    name: "categories/gcid:animal_control_service",
    displayName: "Animal control and welfare service",
  },
  {
    name: "categories/gcid:animal_hospital",
    displayName: "Animal hospital",
  },
  {
    name: "categories/gcid:animal_park",
    displayName: "Animal park",
  },
  {
    name: "categories/gcid:animal_protection_organization",
    displayName: "Animal Protection Organisation",
  },
  {
    name: "categories/gcid:animal_rescue_service",
    displayName: "Animal rescue service",
  },
  {
    name: "categories/gcid:animal_shelter",
    displayName: "Animal shelter",
  },
  {
    name: "categories/gcid:animal_watering_hole",
    displayName: "Animal watering hole",
  },
  {
    name: "categories/gcid:animation_studio",
    displayName: "Animation Studio",
  },
  {
    name: "categories/gcid:anime_club",
    displayName: "Anime club",
  },
  {
    name: "categories/gcid:antique_furniture_restoration_service",
    displayName: "Antique furniture restoration service",
  },
  {
    name: "categories/gcid:antique_furniture_store",
    displayName: "Antique Furniture Shop",
  },
  {
    name: "categories/gcid:antique_store",
    displayName: "Antique Shop",
  },
  {
    name: "categories/gcid:apartment_building",
    displayName: "Apartment building",
  },
  {
    name: "categories/gcid:apartment_complex",
    displayName: "Flat Complex",
  },
  {
    name: "categories/gcid:apartment_rental_agency",
    displayName: "Apartment Letting Agency",
  },
  {
    name: "categories/gcid:apostolic_church",
    displayName: "Apostolic church",
  },
  {
    name: "categories/gcid:appliance_parts_supplier",
    displayName: "Appliance parts supplier",
  },
  {
    name: "categories/gcid:appliance_rental_service",
    displayName: "Appliance Rental Agency",
  },
  {
    name: "categories/gcid:appliance_repair_service",
    displayName: "Appliance repair service",
  },
  {
    name: "categories/gcid:appliance_store",
    displayName: "Appliance Shop",
  },
  {
    name: "categories/gcid:appliances_customer_service",
    displayName: "Appliances customer service",
  },
  {
    name: "categories/gcid:appraiser",
    displayName: "Appraiser",
  },
  {
    name: "categories/gcid:apprenticeship_center",
    displayName: "Apprenticeship Centre",
  },
  {
    name: "categories/gcid:aquaculture_farm",
    displayName: "Aquaculture farm",
  },
  {
    name: "categories/gcid:aquarium",
    displayName: "Aquarium",
  },
  {
    name: "categories/gcid:aquarium_shop",
    displayName: "Aquarium shop",
  },
  {
    name: "categories/gcid:aquatic_center",
    displayName: "Aquatic centre",
  },
  {
    name: "categories/gcid:arab_restaurant",
    displayName: "Arab restaurant",
  },
  {
    name: "categories/gcid:arboretum",
    displayName: "Arboretum",
  },
  {
    name: "categories/gcid:arborist_and_tree_surgeon",
    displayName: "Arborist and tree surgeon",
  },
  {
    name: "categories/gcid:archaeological_museum",
    displayName: "Archaeological museum",
  },
  {
    name: "categories/gcid:archery_club",
    displayName: "Archery club",
  },

  {
    name: "categories/gcid:archery_store",
    displayName: "Archery Shop",
  },
  {
    name: "categories/gcid:architect",
    displayName: "Architect",
  },
  {
    name: "categories/gcid:architects_association",
    displayName: "Architects association",
  },
  {
    name: "categories/gcid:architectural_and_engineering_model_maker",
    displayName: "Model Maker",
  },
  {
    name: "categories/gcid:architectural_designer",
    displayName: "Architectural Designer",
  },
  {
    name: "categories/gcid:architectural_salvage_store",
    displayName: "Architectural Salvage Shop",
  },
  {
    name: "categories/gcid:architecture_firm",
    displayName: "Architecture firm",
  },
  {
    name: "categories/gcid:architecture_school",
    displayName: "Architecture school",
  },
  {
    name: "categories/gcid:archive",
    displayName: "Archive",
  },
  {
    name: "categories/gcid:arena",
    displayName: "Arena",
  },
  {
    name: "categories/gcid:argentinian_restaurant",
    displayName: "Argentinian restaurant",
  },
  {
    name: "categories/gcid:armed_forces_association",
    displayName: "Armed forces association",
  },
  {
    name: "categories/gcid:armenian_church",
    displayName: "Armenian church",
  },
  {
    name: "categories/gcid:armenian_restaurant",
    displayName: "Armenian restaurant",
  },
  {
    name: "categories/gcid:army_and_navy_store",
    displayName: "Army & navy surplus shop",
  },
  {
    name: "categories/gcid:army_base",
    displayName: "Army barracks",
  },
  {
    name: "categories/gcid:army_facility",
    displayName: "Army facility",
  },
  {
    name: "categories/gcid:army_museum",
    displayName: "Army museum",
  },
  {
    name: "categories/gcid:aromatherapy_class",
    displayName: "Aromatherapy class",
  },
  {
    name: "categories/gcid:aromatherapy_service",
    displayName: "Aromatherapy service",
  },
  {
    name: "categories/gcid:aromatherapy_supply_store",
    displayName: "Aromatherapy Supply Shop",
  },
  {
    name: "categories/gcid:art_cafe",
    displayName: "Art cafe",
  },
  {
    name: "categories/gcid:art_center",
    displayName: "Art Centre",
  },
  {
    name: "categories/gcid:art_dealer",
    displayName: "Art dealer",
  },
  {
    name: "categories/gcid:art_gallery",
    displayName: "Art gallery",
  },
  {
    name: "categories/gcid:art_handcraft",
    displayName: "Art handcraft",
  },
  {
    name: "categories/gcid:art_museum",
    displayName: "Art museum",
  },
  {
    name: "categories/gcid:art_restoration_service",
    displayName: "Art restoration service",
  },
  {
    name: "categories/gcid:art_school",
    displayName: "Art school",
  },
  {
    name: "categories/gcid:art_studio",
    displayName: "Art studio",
  },
  {
    name: "categories/gcid:art_supply_store",
    displayName: "Art supply shop",
  },
  {
    name: "categories/gcid:artificial_plant_supplier",
    displayName: "Artificial plant supplier",
  },
  {
    name: "categories/gcid:artist",
    displayName: "Artist",
  },
  {
    name: "categories/gcid:arts_organization",
    displayName: "Arts Organisation",
  },
  {
    name: "categories/gcid:asador",
    displayName: "Grill",
  },
  {
    name: "categories/gcid:asbestos_testing_service",
    displayName: "Asbestos testing service",
  },
  {
    name: "categories/gcid:ashram",
    displayName: "Ashram",
  },
  {
    name: "categories/gcid:asian_fusion_restaurant",
    displayName: "Asian fusion restaurant",
  },
  {
    name: "categories/gcid:asian_grocery_store",
    displayName: "Asian Grocery Shop",
  },
  {
    name: "categories/gcid:asian_household_goods_store",
    displayName: "Asian Household Goods Shop",
  },
  {
    name: "categories/gcid:asian_restaurant",
    displayName: "Asian restaurant",
  },
  {
    name: "categories/gcid:asphalt_contractor",
    displayName: "Asphalt contractor",
  },
  {
    name: "categories/gcid:asphalt_mixing_plant",
    displayName: "Asphalt mixing plant",
  },
  {
    name: "categories/gcid:assamese_restaurant",
    displayName: "Assamese restaurant",
  },
  {
    name: "categories/gcid:assemblies_of_god_church",
    displayName: "Assemblies of God church",
  },
  {
    name: "categories/gcid:assembly_room",
    displayName: "Assembly room",
  },
  {
    name: "categories/gcid:assistante_maternelle",
    displayName: "Assistante maternelle",
  },
  {
    name: "categories/gcid:assisted_living_facility",
    displayName: "Assisted living residence",
  },
  {
    name: "categories/gcid:association_or_organization",
    displayName: "Association or organisation",
  },
  {
    name: "categories/gcid:aston_martin_dealer",
    displayName: "Aston Martin dealer",
  },
  {
    name: "categories/gcid:astrologer",
    displayName: "Astrologer",
  },
  {
    name: "categories/gcid:asturian_restaurant",
    displayName: "Asturian restaurant",
  },
  {
    name: "categories/gcid:athletic_club",
    displayName: "Athletic Sports Club",
  },
  {
    name: "categories/gcid:athletic_field",
    displayName: "Athletics field",
  },
  {
    name: "categories/gcid:athletic_park",
    displayName: "Athletic park",
  },
  {
    name: "categories/gcid:athletic_track",
    displayName: "Athletic track",
  },
  {
    name: "categories/gcid:atm",
    displayName: "Cashpoint",
  },
  {
    name: "categories/gcid:attorney_referral_service",
    displayName: "Lawyer Referral Service",
  },
  {
    name: "categories/gcid:atv_dealer",
    displayName: "ATV Dealer",
  },
  {
    name: "categories/gcid:atv_rental_service",
    displayName: "ATV rental service",
  },
  {
    name: "categories/gcid:atv_repair_shop",
    displayName: "ATV repair shop",
  },
  {
    name: "categories/gcid:auction_house",
    displayName: "Auction house",
  },
  {
    name: "categories/gcid:audi_dealer",
    displayName: "Audi dealer",
  },
  {
    name: "categories/gcid:audio_visual_consultant",
    displayName: "Audio visual consultant",
  },
  {
    name: "categories/gcid:audio_visual_equipment_rental_service",
    displayName: "Audio Visual Equipment Hire Service",
  },
  {
    name: "categories/gcid:audio_visual_equipment_repair_service",
    displayName: "Audio visual equipment repair service",
  },
  {
    name: "categories/gcid:audio_visual_equipment_supplier",
    displayName: "Audio-visual equipment supplier",
  },
  {
    name: "categories/gcid:audiologist",
    displayName: "Audiologist",
  },
  {
    name: "categories/gcid:auditor",
    displayName: "Auditor",
  },
  {
    name: "categories/gcid:auditorium",
    displayName: "Auditorium",
  },
  {
    name: "categories/gcid:australian_goods_store",
    displayName: "Australian Goods Shop",
  },
  {
    name: "categories/gcid:australian_restaurant",
    displayName: "Australian restaurant",
  },
  {
    name: "categories/gcid:austrian_restaurant",
    displayName: "Austrian restaurant",
  },
  {
    name: "categories/gcid:auto_accessories_wholesaler",
    displayName: "Auto Accessories Wholesaler",
  },
  {
    name: "categories/gcid:auto_air_conditioning_service",
    displayName: "Auto Air-conditioning Service",
  },
  {
    name: "categories/gcid:auto_auction",
    displayName: "Car Auction",
  },
  {
    name: "categories/gcid:auto_body_parts_supplier",
    displayName: "Car Body Parts Supplier",
  },
  {
    name: "categories/gcid:auto_body_shop",
    displayName: "Car Body Shop",
  },
  {
    name: "categories/gcid:auto_bodywork_mechanic",
    displayName: "Car Bodywork Mechanic",
  },
  {
    name: "categories/gcid:auto_broker",
    displayName: "Car broker",
  },
  {
    name: "categories/gcid:auto_chemistry_shop",
    displayName: "Auto chemistry shop",
  },
  {
    name: "categories/gcid:auto_dent_removal_service",
    displayName: "Auto Dent Removal Service Station",
  },
  {
    name: "categories/gcid:auto_electrical_service",
    displayName: "Auto electrical service",
  },
  {
    name: "categories/gcid:auto_glass_repair_service",
    displayName: "Auto glass repair service",
  },
  {
    name: "categories/gcid:auto_glass_shop",
    displayName: "Windshield Repair Service",
  },
  {
    name: "categories/gcid:auto_insurance_agency",
    displayName: "Car and Motor Insurance Agency",
  },
  {
    name: "categories/gcid:auto_machine_shop",
    displayName: "Vehicle Parts Shop",
  },
  {
    name: "categories/gcid:auto_market",
    displayName: "Auto market",
  },
  {
    name: "categories/gcid:auto_painting",
    displayName: "Car Painting",
  },
  {
    name: "categories/gcid:auto_parts_manufacturer",
    displayName: "Car Parts Manufacturer",
  },
  {
    name: "categories/gcid:auto_parts_market",
    displayName: "Vehicle Parts Market",
  },
  {
    name: "categories/gcid:auto_parts_store",
    displayName: "Auto parts store",
  },
  {
    name: "categories/gcid:auto_radiator_repair_service",
    displayName: "Car Radiator Repair Service",
  },
  {
    name: "categories/gcid:auto_repair_shop",
    displayName: "Car Service Station",
  },
  {
    name: "categories/gcid:auto_restoration_service",
    displayName: "Car Restoration Service",
  },
  {
    name: "categories/gcid:auto_rickshaw_stand",
    displayName: "Auto rickshaw stand",
  },
  {
    name: "categories/gcid:auto_spring_shop",
    displayName: "Shock absorbers & suspension shop",
  },
  {
    name: "categories/gcid:auto_sunroof_shop",
    displayName: "Vehicle Sunroof Shop",
  },
  {
    name: "categories/gcid:auto_tag_agency",
    displayName: "Vehicle Registration Agency",
  },
  {
    name: "categories/gcid:auto_tune_up_service",
    displayName: "Vehicle Tuning Service",
  },
  {
    name: "categories/gcid:auto_upholsterer",
    displayName: "Vehicle Upholsterer",
  },
  {
    name: "categories/gcid:auto_window_tinting_service",
    displayName: "Auto window tinting service",
  },
  {
    name: "categories/gcid:auto_wrecker",
    displayName: "Car Breaker",
  },
  {
    name: "categories/gcid:automation_company",
    displayName: "Automation company",
  },
  {
    name: "categories/gcid:automobile_storage_facility",
    displayName: "Vehicle Storage Facility",
  },
  {
    name: "categories/gcid:aviation_consultant",
    displayName: "Aviation consultant",
  },
  {
    name: "categories/gcid:aviation_training_institute",
    displayName: "Aviation training institute",
  },
  {
    name: "categories/gcid:awadhi_restaurant",
    displayName: "Awadhi Restaurant",
  },
  {
    name: "categories/gcid:awning_supplier",
    displayName: "Awning supplier",
  },
  {
    name: "categories/gcid:ayam_penyet_restaurant",
    displayName: "Ayam penyet restaurant",
  },
  {
    name: "categories/gcid:ayurvedic_clinic",
    displayName: "Ayurvedic clinic",
  },
  {
    name: "categories/gcid:azerbaijani_restaurant",
    displayName: "Azerbaijani restaurant",
  },
  {
    name: "categories/gcid:baby_clothing_store",
    displayName: "Baby Clothing Shop",
  },
  {
    name: "categories/gcid:baby_store",
    displayName: "Baby shop",
  },
  {
    name: "categories/gcid:baby_swimming_school",
    displayName: "Baby swimming school",
  },
  {
    name: "categories/gcid:babysitter",
    displayName: "Childminder",
  },
  {
    name: "categories/gcid:back_office",
    displayName: "Back Office",
  },
  {
    name: "categories/gcid:baden_restaurant",
    displayName: "Baden restaurant",
  },
  {
    name: "categories/gcid:badminton_club",
    displayName: "Badminton club",
  },
  {
    name: "categories/gcid:badminton_complex",
    displayName: "Badminton Complex",
  },
  {
    name: "categories/gcid:badminton_court",
    displayName: "Badminton court",
  },
  {
    name: "categories/gcid:bag_shop",
    displayName: "Bag shop",
  },
  {
    name: "categories/gcid:bagel_shop",
    displayName: "Bagel shop",
  },
  {
    name: "categories/gcid:bahai_house_of_worship",
    displayName: "Bahá'í house of worship",
  },
  {
    name: "categories/gcid:bail_bonds_service",
    displayName: "Surety bond service",
  },
  {
    name: "categories/gcid:bait_shop",
    displayName: "Bait & tackle shop",
  },
  {
    name: "categories/gcid:bakery",
    displayName: "Bakery and Cake Shop",
  },
  {
    name: "categories/gcid:bakery_equipment",
    displayName: "Bakery equipment",
  },
  {
    name: "categories/gcid:baking_supply_store",
    displayName: "Baking Supply Shop",
  },
  {
    name: "categories/gcid:bakso_restaurant",
    displayName: "Bakso restaurant",
  },
  {
    name: "categories/gcid:balinese_restaurant",
    displayName: "Balinese restaurant",
  },
  {
    name: "categories/gcid:ballet_school",
    displayName: "Ballet school",
  },
  {
    name: "categories/gcid:ballet_theater",
    displayName: "Ballet theater",
  },
  {
    name: "categories/gcid:balloon_artist",
    displayName: "Balloon artist",
  },
  {
    name: "categories/gcid:balloon_ride_tour_agency",
    displayName: "Balloon ride tour agency",
  },
  {
    name: "categories/gcid:balloon_store",
    displayName: "Balloon Shop",
  },
  {
    name: "categories/gcid:ballroom_dance_instructor",
    displayName: "Ballroom dance instructor",
  },
  {
    name: "categories/gcid:band",
    displayName: "Band",
  },
  {
    name: "categories/gcid:bangladeshi_restaurant",
    displayName: "Bangladeshi restaurant",
  },
  {
    name: "categories/gcid:bangle_shop",
    displayName: "Bangle Shop",
  },
  {
    name: "categories/gcid:bank",
    displayName: "Bank",
  },
  {
    name: "categories/gcid:banking_entrance_coaching_centre",
    displayName: "Banking Entrance Coaching Centre",
  },
  {
    name: "categories/gcid:bankruptcy_attorney",
    displayName: "Bankruptcy Lawyer",
  },
  {
    name: "categories/gcid:bankruptcy_service",
    displayName: "Bankruptcy service",
  },
  {
    name: "categories/gcid:banner_store",
    displayName: "Banner Shop",
  },
  {
    name: "categories/gcid:banquet_hall",
    displayName: "Banquet hall",
  },
  {
    name: "categories/gcid:baptist_church",
    displayName: "Baptist church",
  },
  {
    name: "categories/gcid:bar",
    displayName: "Bar",
  },
  {
    name: "categories/gcid:bar_and_grill",
    displayName: "Bar & grill",
  },
  {
    name: "categories/gcid:bar_pmu",
    displayName: "Bar PMU",
  },
  {
    name: "categories/gcid:bar_restaurant_furniture_store",
    displayName: "Bar Restaurant Furniture Shop",
  },
  {
    name: "categories/gcid:bar_stool_supplier",
    displayName: "Bar stool supplier",
  },
  {
    name: "categories/gcid:bar_tabac",
    displayName: "Bar tabac",
  },
  {
    name: "categories/gcid:barbecue_restaurant",
    displayName: "Barbecue restaurant",
  },
  {
    name: "categories/gcid:barbecue_spots",
    displayName: "Barbecue area",
  },
  {
    name: "categories/gcid:barber_school",
    displayName: "Barbers School",
  },
  {
    name: "categories/gcid:barber_shop",
    displayName: "Barber shop",
  },
  {
    name: "categories/gcid:barber_supply_store",
    displayName: "Barber Supply Shop",
  },
  {
    name: "categories/gcid:bariatric_surgeon",
    displayName: "Bariatric surgeon",
  },
  {
    name: "categories/gcid:bark_supplier",
    displayName: "Bark supplier",
  },
  {
    name: "categories/gcid:barrel_supplier",
    displayName: "Barrel supplier",
  },
  {
    name: "categories/gcid:barrister",
    displayName: "Barrister",
  },
  {
    name: "categories/gcid:bartending_school",
    displayName: "Bartending school",
  },
  {
    name: "categories/gcid:baseball_club",
    displayName: "Baseball club",
  },
  {
    name: "categories/gcid:baseball_field",
    displayName: "Baseball field",
  },
  {
    name: "categories/gcid:baseball_goods_store",
    displayName: "Baseball Goods Shop",
  },
  {
    name: "categories/gcid:basilica",
    displayName: "Basilica",
  },
  {
    name: "categories/gcid:basket_supplier",
    displayName: "Basket supplier",
  },
  {
    name: "categories/gcid:basketball_club",
    displayName: "Basketball club",
  },
  {
    name: "categories/gcid:basketball_court",
    displayName: "Basketball court",
  },
  {
    name: "categories/gcid:basketball_court_contractor",
    displayName: "Basketball court contractor",
  },
  {
    name: "categories/gcid:basketball_instructor",
    displayName: "Basket Ball Coaching Center",
  },
  {
    name: "categories/gcid:basque_restaurant",
    displayName: "Basque restaurant",
  },
  {
    name: "categories/gcid:batak_restaurant",
    displayName: "Batak restaurant",
  },
  {
    name: "categories/gcid:bathroom_remodeler",
    displayName: "Bathroom Renovator",
  },
  {
    name: "categories/gcid:bathroom_supply_store",
    displayName: "Bathroom Supply Shop",
  },
  {
    name: "categories/gcid:batik_clothing_store",
    displayName: "Batik clothing store",
  },
  {
    name: "categories/gcid:battery_manufacturer",
    displayName: "Battery Manufacturer",
  },
  {
    name: "categories/gcid:battery_store",
    displayName: "Battery Store",
  },
  {
    name: "categories/gcid:battery_wholesaler",
    displayName: "Battery Wholesaler",
  },
  {
    name: "categories/gcid:batting_cage_center",
    displayName: "Batting cage centre",
  },
  {
    name: "categories/gcid:bavarian_restaurant",
    displayName: "Bavarian restaurant",
  },
  {
    name: "categories/gcid:bazar",
    displayName: "Bazar",
  },
  {
    name: "categories/gcid:bbq_area",
    displayName: "BBQ area",
  },
  {
    name: "categories/gcid:beach_cleaning_service",
    displayName: "Beach cleaning service",
  },
  {
    name: "categories/gcid:beach_clothing_store",
    displayName: "Beach Clothing Shop",
  },
  {
    name: "categories/gcid:beach_entertainment_shop",
    displayName: "Beach entertainment shop",
  },
  {
    name: "categories/gcid:beach_pavillion",
    displayName: "Beach pavillion",
  },
  {
    name: "categories/gcid:beach_volleyball_club",
    displayName: "Beach volleyball club",
  },
  {
    name: "categories/gcid:beach_volleyball_court",
    displayName: "Beach volleyball court",
  },
  {
    name: "categories/gcid:bead_store",
    displayName: "Bead Shop",
  },
  {
    name: "categories/gcid:bead_wholesaler",
    displayName: "Bead wholesaler",
  },
  {
    name: "categories/gcid:bearing_supplier",
    displayName: "Bearing supplier",
  },
  {
    name: "categories/gcid:beautician",
    displayName: "Beautician",
  },
  {
    name: "categories/gcid:beauty_product_supplier",
    displayName: "Beauty product supplier",
  },
  {
    name: "categories/gcid:beauty_products_vending_machine",
    displayName: "Beauty products vending machine",
  },
  {
    name: "categories/gcid:beauty_products_wholesaler",
    displayName: "Beauty Products Wholesaler",
  },
  {
    name: "categories/gcid:beauty_salon",
    displayName: "Beauty Parlour",
  },
  {
    name: "categories/gcid:beauty_school",
    displayName: "Beauty therapy college",
  },
  {
    name: "categories/gcid:beauty_supply_store",
    displayName: "Beauty supply store",
  },
  {
    name: "categories/gcid:bed_and_breakfast",
    displayName: "Bed & breakfast",
  },
  {
    name: "categories/gcid:bed_shop",
    displayName: "Bed shop",
  },
  {
    name: "categories/gcid:bedding_store",
    displayName: "Bedding Shop",
  },
  {
    name: "categories/gcid:bedroom_furniture_store",
    displayName: "Bedroom furniture store",
  },
  {
    name: "categories/gcid:beef_rice_bowl_restaurant",
    displayName: "Gyudon restaurant",
  },
  {
    name: "categories/gcid:beer_distributor",
    displayName: "Beer distributor",
  },
  {
    name: "categories/gcid:beer_garden",
    displayName: "Beer garden",
  },
  {
    name: "categories/gcid:beer_hall",
    displayName: "Beer hall",
  },
  {
    name: "categories/gcid:beer_store",
    displayName: "Beer shop",
  },
  {
    name: "categories/gcid:belgian_restaurant",
    displayName: "Belgian restaurant",
  },
  {
    name: "categories/gcid:belt_shop",
    displayName: "Belt shop",
  },
  {
    name: "categories/gcid:bengali_restaurant",
    displayName: "Bengali restaurant",
  },
  {
    name: "categories/gcid:bentley_dealer",
    displayName: "Bentley dealer",
  },
  {
    name: "categories/gcid:berry_restaurant",
    displayName: "Berry restaurant",
  },
  {
    name: "categories/gcid:berufsfachschule",
    displayName: "Berufsfachschule (vocational school with apprenticeship)",
  },
  {
    name: "categories/gcid:betawi_restaurant",
    displayName: "Betawi restaurant",
  },
  {
    name: "categories/gcid:betting_agency",
    displayName: "Betting agency",
  },
  {
    name: "categories/gcid:beverage_distributor",
    displayName: "Beverage Store",
  },
  {
    name: "categories/gcid:bicycle_club",
    displayName: "Cycling Club",
  },
  {
    name: "categories/gcid:bicycle_rack",
    displayName: "Bicycle rack",
  },
  {
    name: "categories/gcid:bicycle_rental_service",
    displayName: "Bicycle hire shop",
  },
  {
    name: "categories/gcid:bicycle_repair_shop",
    displayName: "Bicycle repair shop",
  },
  {
    name: "categories/gcid:bicycle_store",
    displayName: "Bicycle Shop",
  },
  {
    name: "categories/gcid:bicycle_wholesale",
    displayName: "Bicycle wholesaler",
  },
  {
    name: "categories/gcid:bike_wash",
    displayName: "Bike wash",
  },
  {
    name: "categories/gcid:bikram_yoga_studio",
    displayName: "Bikram yoga studio",
  },
  {
    name: "categories/gcid:bilingual_school",
    displayName: "Bilingual school",
  },
  {
    name: "categories/gcid:billiards_supply_store",
    displayName: "Billiards Supply Shop",
  },
  {
    name: "categories/gcid:bingo_hall",
    displayName: "Bingo hall",
  },
  {
    name: "categories/gcid:biochemical_supplier",
    displayName: "Biochemical Supplier",
  },
  {
    name: "categories/gcid:biochemistry_lab",
    displayName: "Biochemistry lab",
  },
  {
    name: "categories/gcid:biofeedback_therapist",
    displayName: "Biofeedback therapist",
  },
  {
    name: "categories/gcid:biotechnology_company",
    displayName: "Biotechnology company",
  },
  {
    name: "categories/gcid:biotechnology_engineer",
    displayName: "Biotechnology Engineer",
  },
  {
    name: "categories/gcid:bird_control_service",
    displayName: "Bird control service",
  },
  {
    name: "categories/gcid:bird_shop",
    displayName: "Bird shop",
  },
  {
    name: "categories/gcid:bird_watching_area",
    displayName: "Bird watching area",
  },
  {
    name: "categories/gcid:birth_center",
    displayName: "Birth Centre",
  },
  {
    name: "categories/gcid:birth_certificate_service",
    displayName: "Birth Certificate Office",
  },
  {
    name: "categories/gcid:birth_control_center",
    displayName: "Birth Control Centre",
  },
  {
    name: "categories/gcid:biryani_restaurant",
    displayName: "Biryani restaurant",
  },
  {
    name: "categories/gcid:bistro",
    displayName: "Bistro",
  },
  {
    name: "categories/gcid:blacksmith",
    displayName: "Blacksmith",
  },
  {
    name: "categories/gcid:blast_cleaning_service",
    displayName: "Blast cleaning service",
  },
  {
    name: "categories/gcid:blind_school",
    displayName: "Blind school",
  },
  {
    name: "categories/gcid:blinds_shop",
    displayName: "Blinds shop",
  },
  {
    name: "categories/gcid:blood_bank",
    displayName: "Blood bank",
  },
  {
    name: "categories/gcid:blood_donation_center",
    displayName: "Blood Donation Centre",
  },
  {
    name: "categories/gcid:blood_testing_service",
    displayName: "Blood testing service",
  },
  {
    name: "categories/gcid:blueprint_service",
    displayName: "Blueprint service",
  },
  {
    name: "categories/gcid:blues_club",
    displayName: "Blues club",
  },
  {
    name: "categories/gcid:bmw_dealer",
    displayName: "BMW dealer",
  },
  {
    name: "categories/gcid:bmw_motorcycle_dealer",
    displayName: "BMW motorcycle dealer",
  },
  {
    name: "categories/gcid:bmx_club",
    displayName: "BMX Club",
  },
  {
    name: "categories/gcid:bmx_park",
    displayName: "BMX park",
  },
  {
    name: "categories/gcid:bmx_track",
    displayName: "BMX track",
  },
  {
    name: "categories/gcid:board_game_club",
    displayName: "Board game club",
  },
  {
    name: "categories/gcid:board_of_education",
    displayName: "Education Councils & Boards Office",
  },
  {
    name: "categories/gcid:boarding_house",
    displayName: "Boarding house",
  },
  {
    name: "categories/gcid:boarding_school",
    displayName: "Boarding school",
  },
  {
    name: "categories/gcid:boat_accessories_supplier",
    displayName: "Boat accessories supplier",
  },
  {
    name: "categories/gcid:boat_builder",
    displayName: "Boat builders",
  },
  {
    name: "categories/gcid:boat_club",
    displayName: "Boating club",
  },
  {
    name: "categories/gcid:boat_cover_supplier",
    displayName: "Boat cover supplier",
  },
  {
    name: "categories/gcid:boat_dealer",
    displayName: "Marine broker",
  },
  {
    name: "categories/gcid:boat_ramp",
    displayName: "Boat ramp",
  },
  {
    name: "categories/gcid:boat_rental_service",
    displayName: "Boat Rental Agency",
  },
  {
    name: "categories/gcid:boat_repair_shop",
    displayName: "Boat maintenance",
  },
  {
    name: "categories/gcid:boat_storage_facility",
    displayName: "Boat storage facility",
  },
  {
    name: "categories/gcid:boat_tour_agency",
    displayName: "Boat tour agency",
  },
  {
    name: "categories/gcid:boat_trailer_dealer",
    displayName: "Boat trailer dealer",
  },
  {
    name: "categories/gcid:boating_instructor",
    displayName: "Boating instructor",
  },
  {
    name: "categories/gcid:bocce_ball_court",
    displayName: "Bocce ball court",
  },
  {
    name: "categories/gcid:body_piercing_shop",
    displayName: "Body piercing shop",
  },
  {
    name: "categories/gcid:body_shaping_class",
    displayName: "Body shaping class",
  },
  {
    name: "categories/gcid:boiler_manufacturer",
    displayName: "Boiler Manufacturer",
  },
  {
    name: "categories/gcid:boiler_supplier",
    displayName: "Boiler supplier",
  },
  {
    name: "categories/gcid:bonesetting_house",
    displayName: "Bonesetting house",
  },
  {
    name: "categories/gcid:bonsai_plant_supplier",
    displayName: "Bonsai plant supplier",
  },
  {
    name: "categories/gcid:book_publisher",
    displayName: "Book publisher",
  },
  {
    name: "categories/gcid:book_store",
    displayName: "Book Shop",
  },
  {
    name: "categories/gcid:bookbinder",
    displayName: "Bookbinder",
  },
  {
    name: "categories/gcid:bookkeeping_service",
    displayName: "Bookkeeping service",
  },
  {
    name: "categories/gcid:bookmaker",
    displayName: "Bookmaker",
  },
  {
    name: "categories/gcid:books_wholesaler",
    displayName: "Books Wholesaler",
  },
  {
    name: "categories/gcid:boot_camp",
    displayName: "Boot camp",
  },
  {
    name: "categories/gcid:boot_repair_shop",
    displayName: "Boot repair shop",
  },
  {
    name: "categories/gcid:boot_store",
    displayName: "Boot Shop",
  },
  {
    name: "categories/gcid:border_crossing_station",
    displayName: "Border crossing station",
  },
  {
    name: "categories/gcid:border_guard",
    displayName: "Border guard",
  },
  {
    name: "categories/gcid:botanical_garden",
    displayName: "Botanical garden",
  },
  {
    name: "categories/gcid:bottle_and_can_redemption_center",
    displayName: "Bottle & Can Redemption Centre",
  },
  {
    name: "categories/gcid:bottled_water_supplier",
    displayName: "Bottled water supplier",
  },
  {
    name: "categories/gcid:bouncy_castle_hire",
    displayName: "Bouncy castle hire",
  },
  {
    name: "categories/gcid:boutique",
    displayName: "Boutique",
  },
  {
    name: "categories/gcid:bowling_alley",
    displayName: "Bowling Alley",
  },
  {
    name: "categories/gcid:bowling_club",
    displayName: "Bowling club",
  },
  {
    name: "categories/gcid:bowling_supply_shop",
    displayName: "Bowling supply shop",
  },
  {
    name: "categories/gcid:box_lunch_supplier",
    displayName: "Tiffin Service Provider",
  },
  {
    name: "categories/gcid:boxing_club",
    displayName: "Boxing club",
  },
  {
    name: "categories/gcid:boxing_gym",
    displayName: "Boxing Coaching Center",
  },
  {
    name: "categories/gcid:boxing_ring",
    displayName: "Boxing ring",
  },
  {
    name: "categories/gcid:boys_high_school",
    displayName: "Boys' Secondary School",
  },
  {
    name: "categories/gcid:boys_hostel",
    displayName: "Boy's Hostel",
  },
  {
    name: "categories/gcid:bpo_company",
    displayName: "BPO Company",
  },
  {
    name: "categories/gcid:bpo_placement_agency",
    displayName: "BPO Placement Agency",
  },
  {
    name: "categories/gcid:brake_shop",
    displayName: "Brake shop",
  },
  {
    name: "categories/gcid:brazilian_pastelaria",
    displayName: "Brazilian pastelaria",
  },
  {
    name: "categories/gcid:brazilian_restaurant",
    displayName: "Brazilian restaurant",
  },
  {
    name: "categories/gcid:breakfast_restaurant",
    displayName: "Breakfast restaurant",
  },
  {
    name: "categories/gcid:brewery",
    displayName: "Brewery",
  },
  {
    name: "categories/gcid:brewing_supply_store",
    displayName: "Brewing Supply Shop",
  },
  {
    name: "categories/gcid:brewpub",
    displayName: "Microbrewery",
  },
  {
    name: "categories/gcid:brick_manufacturer",
    displayName: "Brick Manufacturer",
  },
  {
    name: "categories/gcid:bricklayer",
    displayName: "Bricklayer",
  },
  {
    name: "categories/gcid:bridal_shop",
    displayName: "Bridal shop",
  },
  {
    name: "categories/gcid:bridge",
    displayName: "Bridge",
  },
  {
    name: "categories/gcid:bridge_club",
    displayName: "Bridge club",
  },
  {
    name: "categories/gcid:british_restaurant",
    displayName: "British restaurant",
  },
  {
    name: "categories/gcid:brunch_restaurant",
    displayName: "Brunch restaurant",
  },
  {
    name: "categories/gcid:bubble_tea_store",
    displayName: "Bubble tea store",
  },
  {
    name: "categories/gcid:buddhist_supplies_store",
    displayName: "Buddhist Supplies Shop",
  },
  {
    name: "categories/gcid:buddhist_temple",
    displayName: "Buddhist temple",
  },
  {
    name: "categories/gcid:buffet_restaurant",
    displayName: "Buffet restaurant",
  },
  {
    name: "categories/gcid:bugatti_dealer",
    displayName: "Bugatti dealer",
  },
  {
    name: "categories/gcid:buick_dealer",
    displayName: "Buick dealer",
  },
  {
    name: "categories/gcid:building_consultant",
    displayName: "Building consultant",
  },
  {
    name: "categories/gcid:building_design_company",
    displayName: "Building design company",
  },
  {
    name: "categories/gcid:building_designer",
    displayName: "Building designer",
  },
  {
    name: "categories/gcid:building_equipment_hire_service",
    displayName: "Building equipment hire service",
  },
  {
    name: "categories/gcid:building_firm",
    displayName: "Building firm",
  },
  {
    name: "categories/gcid:building_inspector",
    displayName: "Building inspector",
  },
  {
    name: "categories/gcid:building_materials_market",
    displayName: "Building materials market",
  },

  {
    name: "categories/gcid:building_materials_supplier",
    displayName: "Building materials supplier",
  },
  {
    name: "categories/gcid:building_restoration_service",
    displayName: "Building restoration service",
  },
  {
    name: "categories/gcid:building_society",
    displayName: "Building society",
  },
  {
    name: "categories/gcid:building_surveyor",
    displayName: "Chartered surveyor",
  },
  {
    name: "categories/gcid:bulgarian_restaurant",
    displayName: "Bulgarian restaurant",
  },
  {
    name: "categories/gcid:bullring",
    displayName: "Bullring",
  },
  {
    name: "categories/gcid:bungee_jumping_center",
    displayName: "Bungee Jumping Center",
  },
  {
    name: "categories/gcid:burglar_alarm_store",
    displayName: "Burglar alarm shop",
  },
  {
    name: "categories/gcid:burmese_restaurant",
    displayName: "Burmese restaurant",
  },
  {
    name: "categories/gcid:burrito_restaurant",
    displayName: "Burrito restaurant",
  },
  {
    name: "categories/gcid:bus_and_coach_company",
    displayName: "Bus and coach company",
  },
  {
    name: "categories/gcid:bus_charter",
    displayName: "Bus charter",
  },
  {
    name: "categories/gcid:bus_company",
    displayName: "Bus company",
  },
  {
    name: "categories/gcid:bus_depot",
    displayName: "Bus depot",
  },
  {
    name: "categories/gcid:bus_ticket_agency",
    displayName: "Bus ticket agency",
  },
  {
    name: "categories/gcid:bus_tour_agency",
    displayName: "Bus tour agency",
  },
  {
    name: "categories/gcid:business_administration_service",
    displayName: "Business administration service",
  },
  {
    name: "categories/gcid:business_banking_service",
    displayName: "Business banking service",
  },
  {
    name: "categories/gcid:business_broker",
    displayName: "Business broker",
  },
  {
    name: "categories/gcid:business_center",
    displayName: "Business Centre",
  },
  {
    name: "categories/gcid:business_development_service",
    displayName: "Business development service",
  },
  {
    name: "categories/gcid:business_management_consultant",
    displayName: "Business management consultant",
  },
  {
    name: "categories/gcid:business_networking_company",
    displayName: "Business Networking Company",
  },
  {
    name: "categories/gcid:business_park",
    displayName: "Business park",
  },
  {
    name: "categories/gcid:business_school",
    displayName: "Business school",
  },
  {
    name: "categories/gcid:business_to_business_service",
    displayName: "Business-to-Business service",
  },
  {
    name: "categories/gcid:butane_gas_supplier",
    displayName: "Butane gas supplier",
  },
  {
    name: "categories/gcid:butcher_shop",
    displayName: "Chicken & Mutton Shop",
  },
  {
    name: "categories/gcid:butcher_shop_deli",
    displayName: "Butcher shop deli",
  },
  {
    name: "categories/gcid:butsudan_store",
    displayName: "Butsudan Shop",
  },
  {
    name: "categories/gcid:cabaret_club",
    displayName: "Cabaret club",
  },
  {
    name: "categories/gcid:cabin_rental_agency",
    displayName: "Cabin rental agency",
  },
  {
    name: "categories/gcid:cabinet_maker",
    displayName: "Cabinet maker",
  },
  {
    name: "categories/gcid:cabinet_store",
    displayName: "Cabinet Shop",
  },
  {
    name: "categories/gcid:cable_company",
    displayName: "Cable provider",
  },
  {
    name: "categories/gcid:cadillac_dealer",
    displayName: "Cadillac dealer",
  },
  {
    name: "categories/gcid:cafe",
    displayName: "Cafe",
  },
  {
    name: "categories/gcid:cafeteria",
    displayName: "Canteen",
  },
  {
    name: "categories/gcid:cajun_restaurant",
    displayName: "Cajun restaurant",
  },
  {
    name: "categories/gcid:cake_decorating_equipment_shop",
    displayName: "Cake Decorating Equipment Shop",
  },
  {
    name: "categories/gcid:cake_shop",
    displayName: "Cake shop",
  },
  {
    name: "categories/gcid:californian_restaurant",
    displayName: "Californian restaurant",
  },
  {
    name: "categories/gcid:call_center",
    displayName: "Call Centre",
  },
  {
    name: "categories/gcid:call_shop",
    displayName: "Call shop",
  },
  {
    name: "categories/gcid:calligraphy_lesson",
    displayName: "Calligraphy lesson",
  },
  {
    name: "categories/gcid:calvary_chapel_church",
    displayName: "Calvary Chapel church",
  },
  {
    name: "categories/gcid:cambodian_restaurant",
    displayName: "Cambodian restaurant",
  },
  {
    name: "categories/gcid:camera_repair_shop",
    displayName: "Camera repair shop",
  },
  {
    name: "categories/gcid:camera_store",
    displayName: "Camera shop",
  },
  {
    name: "categories/gcid:camp",
    displayName: "Children's camp",
  },
  {
    name: "categories/gcid:camper_shell_supplier",
    displayName: "Camper shell supplier",
  },
  {
    name: "categories/gcid:campground",
    displayName: "Campsite",
  },
  {
    name: "categories/gcid:camping_cabin",
    displayName: "Camping cabin",
  },
  {
    name: "categories/gcid:camping_farm",
    displayName: "Camping farm",
  },
  {
    name: "categories/gcid:camping_store",
    displayName: "Camping Shop",
  },
  {
    name: "categories/gcid:canadian_pacific_northwest_restaurant",
    displayName: "Pacific Northwest restaurant (Canada)",
  },
  {
    name: "categories/gcid:canadian_restaurant",
    displayName: "Canadian restaurant",
  },
  {
    name: "categories/gcid:cancer_treatment_center",
    displayName: "Cancer Treatment Centre",
  },
  {
    name: "categories/gcid:candle_store",
    displayName: "Candle shop",
  },
  {
    name: "categories/gcid:candy_store",
    displayName: "Sweet shop",
  },
  {
    name: "categories/gcid:cane_furniture_store",
    displayName: "Cane Furniture Shop",
  },
  {
    name: "categories/gcid:cannabis_store",
    displayName: "Cannabis shop",
  },
  {
    name: "categories/gcid:cannery",
    displayName: "Cannery",
  },
  {
    name: "categories/gcid:canoe_and_kayak_club",
    displayName: "Canoe and kayak club",
  },
  {
    name: "categories/gcid:canoe_and_kayak_rental_service",
    displayName: "Canoe & kayak rental service",
  },
  {
    name: "categories/gcid:canoe_and_kayak_store",
    displayName: "Canoe & Kayak Shop",
  },
  {
    name: "categories/gcid:canoe_and_kayak_tour_agency",
    displayName: "Canoe & kayak tour agency",
  },
  {
    name: "categories/gcid:canoeing_area",
    displayName: "Canoeing area",
  },
  {
    name: "categories/gcid:cantabrian_restaurant",
    displayName: "Cantabrian restaurant",
  },
  {
    name: "categories/gcid:cantonese_restaurant",
    displayName: "Cantonese restaurant",
  },
  {
    name: "categories/gcid:cape_verdean_restaurant",
    displayName: "Cape Verdean restaurant",
  },
  {
    name: "categories/gcid:capoeira_school",
    displayName: "Capoeira school",
  },
  {
    name: "categories/gcid:capsule_hotel",
    displayName: "Capsule hotel",
  },
  {
    name: "categories/gcid:car_accessories_store",
    displayName: "Auto Accessories Store",
  },
  {
    name: "categories/gcid:car_alarm_supplier",
    displayName: "Car alarm supplier",
  },
  {
    name: "categories/gcid:car_battery_store",
    displayName: "Car Battery Shop",
  },
  {
    name: "categories/gcid:car_dealer",
    displayName: "Car dealer",
  },
  {
    name: "categories/gcid:car_detailing_service",
    displayName: "Valeting service",
  },
  {
    name: "categories/gcid:car_factory",
    displayName: "Car factory",
  },
  {
    name: "categories/gcid:car_finance_and_loan_company",
    displayName: "Car finance and loan company",
  },
  {
    name: "categories/gcid:car_inspection_station",
    displayName: "MOT Centre",
  },
  {
    name: "categories/gcid:car_leasing_service",
    displayName: "Car Rental Service",
  },
  {
    name: "categories/gcid:car_manufacturer",
    displayName: "Car Manufacturer",
  },
  {
    name: "categories/gcid:car_race_track",
    displayName: "Racetrack",
  },
  {
    name: "categories/gcid:car_rental_agency",
    displayName: "Car rental company",
  },
  {
    name: "categories/gcid:car_repair",
    displayName: "Vehicle Repair",
  },
  {
    name: "categories/gcid:car_security_system_installer",
    displayName: "Car security system installer",
  },
  {
    name: "categories/gcid:car_service",
    displayName: "Chauffeur service",
  },
  {
    name: "categories/gcid:car_sharing_location",
    displayName: "Car sharing location",
  },
  {
    name: "categories/gcid:car_stereo_store",
    displayName: "Car Stereo Shop",
  },
  {
    name: "categories/gcid:car_wash",
    displayName: "Car wash",
  },
  {
    name: "categories/gcid:carabinieri_police",
    displayName: "Carabinieri police",
  },
  {
    name: "categories/gcid:cardiologist",
    displayName: "Cardiologist",
  },
  {
    name: "categories/gcid:cardiovascular_and_thoracic_surgeon",
    displayName: "Cardiovascular and thoracic surgeon",
  },
  {
    name: "categories/gcid:career_guidance_service",
    displayName: "Career guidance service",
  },
  {
    name: "categories/gcid:caribbean_restaurant",
    displayName: "Caribbean restaurant",
  },
  {
    name: "categories/gcid:carnival_club",
    displayName: "Carnival club",
  },
  {
    name: "categories/gcid:carpenter",
    displayName: "Carpenter",
  },
  {
    name: "categories/gcid:carpet_cleaning_service",
    displayName: "Carpet cleaning service",
  },
  {
    name: "categories/gcid:carpet_installer",
    displayName: "Carpet Fitter",
  },
  {
    name: "categories/gcid:carpet_manufacturer",
    displayName: "Carpet Manufacturer",
  },
  {
    name: "categories/gcid:carpet_store",
    displayName: "Carpet Retail Shop",
  },
  {
    name: "categories/gcid:carpet_wholesaler",
    displayName: "Carpet wholesaler",
  },
  {
    name: "categories/gcid:carpool",
    displayName: "Carpool",
  },
  {
    name: "categories/gcid:carport_and_pergola_builder",
    displayName: "Carport and pergola builder",
  },
  {
    name: "categories/gcid:carriage_ride_service",
    displayName: "Carriage ride service",
  },
  {
    name: "categories/gcid:carvery_restaurant",
    displayName: "Carvery",
  },
  {
    name: "categories/gcid:cash_and_carry_wholesaler",
    displayName: "Cash and carry wholesaler",
  },
  {
    name: "categories/gcid:casino",
    displayName: "Casino",
  },
  {
    name: "categories/gcid:casket_service",
    displayName: "Casket Service",
  },
  {
    name: "categories/gcid:castilian_restaurant",
    displayName: "Castilian restaurant",
  },
  {
    name: "categories/gcid:castle",
    displayName: "Castle",
  },
  {
    name: "categories/gcid:casual_clothing_store",
    displayName: "Casual Clothing Store",
  },
  {
    name: "categories/gcid:casual_japanese_style_restaurant",
    displayName: "Syokudo and Teishoku restaurant",
  },
  {
    name: "categories/gcid:casual_sushi_restaurant",
    displayName: "Conveyor belt sushi restaurant",
  },
  {
    name: "categories/gcid:cat_boarding_service",
    displayName: "Cat boarding service",
  },
  {
    name: "categories/gcid:cat_breeder",
    displayName: "Cat breeder",
  },
  {
    name: "categories/gcid:cat_trainer",
    displayName: "Cat trainer",
  },
  {
    name: "categories/gcid:catalonian_restaurant",
    displayName: "Catalonian restaurant",
  },
  {
    name: "categories/gcid:catering_food_and_drink_supplies",
    displayName: "Catering food and drink supplier",
  },
  {
    name: "categories/gcid:catering_service",
    displayName: "Caterer",
  },
  {
    name: "categories/gcid:cathedral",
    displayName: "Cathedral",
  },
  {
    name: "categories/gcid:catholic_cathedral",
    displayName: "Catholic cathedral",
  },
  {
    name: "categories/gcid:catholic_church",
    displayName: "Catholic church",
  },
  {
    name: "categories/gcid:catholic_school",
    displayName: "Catholic school",
  },
  {
    name: "categories/gcid:cattery",
    displayName: "Cattery",
  },
  {
    name: "categories/gcid:cattle_farm",
    displayName: "Cattle farm",
  },
  {
    name: "categories/gcid:cattle_market",
    displayName: "Cattle market",
  },
  {
    name: "categories/gcid:caucasian_restaurant",
    displayName: "Caucasian restaurant",
  },
  {
    name: "categories/gcid:cbse_school",
    displayName: "CBSE School",
  },
  {
    name: "categories/gcid:cd_store",
    displayName: "CD Shop",
  },
  {
    name: "categories/gcid:ceiling_supplier",
    displayName: "Ceiling Supplier",
  },
  {
    name: "categories/gcid:cell_phone_accessory_store",
    displayName: "Mobile Phone Accessory Shop",
  },
  {
    name: "categories/gcid:cell_phone_charging_station",
    displayName: "Cell phone charging station",
  },
  {
    name: "categories/gcid:cell_phone_store",
    displayName: "Mobile Phone Shop",
  },
  {
    name: "categories/gcid:cement_manufacturer",
    displayName: "Cement Manufacturer",
  },
  {
    name: "categories/gcid:cement_supplier",
    displayName: "Cement Supplier",
  },
  {
    name: "categories/gcid:cemetery",
    displayName: "Cemetery",
  },
  {
    name: "categories/gcid:cendol_restaurant",
    displayName: "Cendol restaurant",
  },
  {
    name: "categories/gcid:central_american_restaurant",
    displayName: "Central American restaurant",
  },
  {
    name: "categories/gcid:central_authority",
    displayName: "Central authority",
  },
  {
    name: "categories/gcid:central_bank",
    displayName: "Central bank",
  },
  {
    name: "categories/gcid:central_european_restaurant",
    displayName: "Central European restaurant",
  },
  {
    name: "categories/gcid:central_javanese_restaurant",
    displayName: "Central Javanese restaurant",
  },
  {
    name: "categories/gcid:ceramic_manufacturer",
    displayName: "Ceramic manufacturer",
  },
  {
    name: "categories/gcid:ceramics_wholesaler",
    displayName: "Ceramics wholesaler",
  },
  {
    name: "categories/gcid:certification_agency",
    displayName: "Certification agency",
  },

  {
    name: "categories/gcid:chalet",
    displayName: "Chalet",
  },
  {
    name: "categories/gcid:chamber_of_agriculture",
    displayName: "Chamber of agriculture",
  },
  {
    name: "categories/gcid:chamber_of_commerce",
    displayName: "Chamber of commerce",
  },
  {
    name: "categories/gcid:chamber_of_handicrafts",
    displayName: "Chamber of handicrafts",
  },
  {
    name: "categories/gcid:champon_noodle_restaurant",
    displayName: "Champon noodle restaurant",
  },
  {
    name: "categories/gcid:chankonabe_restaurant",
    displayName: "Chanko restaurant",
  },
  {
    name: "categories/gcid:chapel",
    displayName: "Chapel",
  },
  {
    name: "categories/gcid:charcuterie",
    displayName: "Charcuterie",
  },
  {
    name: "categories/gcid:charity",
    displayName: "Charity",
  },
  {
    name: "categories/gcid:charter_school",
    displayName: "Academy",
  },
  {
    name: "categories/gcid:chartered_accountant",
    displayName: "Chartered accountant",
  },
  {
    name: "categories/gcid:check_cashing_service",
    displayName: "Cheque cashing service",
  },
  {
    name: "categories/gcid:cheese_manufacturer",
    displayName: "Cheese manufacturer",
  },
  {
    name: "categories/gcid:cheese_shop",
    displayName: "Cheese shop",
  },
  {
    name: "categories/gcid:cheesesteak_restaurant",
    displayName: "Cheesesteak restaurant",
  },
  {
    name: "categories/gcid:chemical_engineer",
    displayName: "Chemical Engineer",
  },
  {
    name: "categories/gcid:chemical_exporter",
    displayName: "Chemical Exporter",
  },
  {
    name: "categories/gcid:chemical_manufacturer",
    displayName: "Chemical Manufacturer",
  },
  {
    name: "categories/gcid:chemical_plant",
    displayName: "Chemical plant",
  },
  {
    name: "categories/gcid:chemical_wholesaler",
    displayName: "Chemical wholesaler",
  },
  {
    name: "categories/gcid:chemistry_faculty",
    displayName: "Chemistry faculty",
  },
  {
    name: "categories/gcid:chemistry_lab",
    displayName: "Chemistry lab",
  },
  {
    name: "categories/gcid:chesapeake_restaurant",
    displayName: "Chesapeake restaurant",
  },
  {
    name: "categories/gcid:chess_and_card_club",
    displayName: "Chess and card club",
  },
  {
    name: "categories/gcid:chess_club",
    displayName: "Chess club",
  },
  {
    name: "categories/gcid:chess_instructor",
    displayName: "Chess instructor",
  },
  {
    name: "categories/gcid:chettinad_restaurtant",
    displayName: "Chettinad restaurant",
  },
  {
    name: "categories/gcid:chevrolet_dealer",
    displayName: "Chevrolet dealer",
  },
  {
    name: "categories/gcid:chicken_hatchery",
    displayName: "Chicken hatchery",
  },
  {
    name: "categories/gcid:chicken_restaurant",
    displayName: "Chicken restaurant",
  },
  {
    name: "categories/gcid:chicken_shop",
    displayName: "Chicken shop",
  },
  {
    name: "categories/gcid:chicken_wings_restaurant",
    displayName: "Chicken wings restaurant",
  },
  {
    name: "categories/gcid:child_care_agency",
    displayName: "Childcare Agency",
  },
  {
    name: "categories/gcid:child_health_care_centre",
    displayName: "Child health care centre",
  },
  {
    name: "categories/gcid:child_psychiatrist",
    displayName: "Child psychiatrist",
  },
  {
    name: "categories/gcid:child_psychologist",
    displayName: "Child psychologist",
  },
  {
    name: "categories/gcid:childbirth_class",
    displayName: "Childbirth class",
  },
  {
    name: "categories/gcid:children_amusement_center",
    displayName: "Children's Amusement Centre",
  },
  {
    name: "categories/gcid:children_hall",
    displayName: "Children hall",
  },
  {
    name: "categories/gcid:children_policlinic",
    displayName: "Children Policlinic",
  },
  {
    name: "categories/gcid:childrens_book_store",
    displayName: "Children's Book Store",
  },
  {
    name: "categories/gcid:childrens_cafe",
    displayName: "Childrens cafe",
  },
  {
    name: "categories/gcid:childrens_clothing_store",
    displayName: "Children's Clothes Shop",
  },
  {
    name: "categories/gcid:childrens_club",
    displayName: "Childrens club",
  },
  {
    name: "categories/gcid:childrens_farm",
    displayName: "Childrens farm",
  },
  {
    name: "categories/gcid:childrens_furniture_store",
    displayName: "Children's Furniture Shop",
  },
  {
    name: "categories/gcid:childrens_home",
    displayName: "Childrens Home",
  },
  {
    name: "categories/gcid:childrens_hospital",
    displayName: "Children's hospital",
  },
  {
    name: "categories/gcid:childrens_library",
    displayName: "Childrens library",
  },
  {
    name: "categories/gcid:childrens_museum",
    displayName: "Children's museum",
  },
  {
    name: "categories/gcid:childrens_party_buffet",
    displayName: "Childrens party buffet",
  },
  {
    name: "categories/gcid:childrens_party_service",
    displayName: "Children's party service",
  },
  {
    name: "categories/gcid:childrens_store",
    displayName: "Childrens Store",
  },
  {
    name: "categories/gcid:childrens_theater",
    displayName: "Childrens Theatre",
  },
  {
    name: "categories/gcid:chilean_restaurant",
    displayName: "Chilean restaurant",
  },
  {
    name: "categories/gcid:chimney_services",
    displayName: "Chimney services",
  },
  {
    name: "categories/gcid:chimney_sweep",
    displayName: "Chimney sweep",
  },
  {
    name: "categories/gcid:chinaware_store",
    displayName: "Chinaware shop",
  },
  {
    name: "categories/gcid:chinese_language_instructor",
    displayName: "Chinese language instructor",
  },
  {
    name: "categories/gcid:chinese_language_school",
    displayName: "Chinese language school",
  },
  {
    name: "categories/gcid:chinese_medicine_clinic",
    displayName: "Chinese Medicine Clinic",
  },
  {
    name: "categories/gcid:chinese_medicine_store",
    displayName: "Chinese Medicine Shop",
  },
  {
    name: "categories/gcid:chinese_noodle_restaurant",
    displayName: "Chinese noodle restaurant",
  },
  {
    name: "categories/gcid:chinese_pastry",
    displayName: "Chinese bakery",
  },
  {
    name: "categories/gcid:chinese_restaurant",
    displayName: "Chinese restaurant",
  },
  {
    name: "categories/gcid:chinese_supermarket",
    displayName: "Chinese supermarket",
  },
  {
    name: "categories/gcid:chinese_takeaway",
    displayName: "Chinese Takeaway",
  },
  {
    name: "categories/gcid:chinese_tea_house",
    displayName: "Chinese tea house",
  },
  {
    name: "categories/gcid:chiropractor",
    displayName: "Chiropractor",
  },
  {
    name: "categories/gcid:chocolate_artisan",
    displayName: "Chocolate artisan",
  },
  {
    name: "categories/gcid:chocolate_cafe",
    displayName: "Chocolate cafe",
  },
  {
    name: "categories/gcid:chocolate_factory",
    displayName: "Chocolate factory",
  },
  {
    name: "categories/gcid:chocolate_shop",
    displayName: "Chocolate shop",
  },
  {
    name: "categories/gcid:choir",
    displayName: "Choir",
  },
  {
    name: "categories/gcid:chop_bar",
    displayName: "Chop bar",
  },
  {
    name: "categories/gcid:chophouse_restaurant",
    displayName: "Chophouse restaurant",
  },
  {
    name: "categories/gcid:christian_book_store",
    displayName: "Christian Book Shop",
  },
  {
    name: "categories/gcid:christian_church",
    displayName: "Christian church",
  },
  {
    name: "categories/gcid:christian_college",
    displayName: "Christian college",
  },
  {
    name: "categories/gcid:christmas_market",
    displayName: "Christmas Market",
  },
  {
    name: "categories/gcid:christmas_store",
    displayName: "Christmas Shop",
  },
  {
    name: "categories/gcid:christmas_tree_farm",
    displayName: "Christmas-Tree Farm",
  },
  {
    name: "categories/gcid:chrysler_dealer",
    displayName: "Chrysler dealer",
  },
  {
    name: "categories/gcid:church",
    displayName: "Church",
  },
  {
    name: "categories/gcid:church_of_christ",
    displayName: "Church of Christ",
  },
  {
    name: "categories/gcid:church_of_jesus_christ_of_latter_day_saints",
    displayName: "Church of Jesus Christ of Latter-day Saints (Mormon)",
  },
  {
    name: "categories/gcid:church_of_the_nazarene",
    displayName: "Church of the Nazarene",
  },
  {
    name: "categories/gcid:church_supply_store",
    displayName: "Church Supply Shop",
  },
  {
    name: "categories/gcid:churreria",
    displayName: "Churreria",
  },
  {
    name: "categories/gcid:cider_bar",
    displayName: "Cider bar",
  },
  {
    name: "categories/gcid:cider_mill",
    displayName: "Cider mill",
  },
  {
    name: "categories/gcid:cig_kofte_restaurant",
    displayName: "Cig kofte restaurant",
  },
  {
    name: "categories/gcid:cigar_shop",
    displayName: "Cigar shop",
  },
  {
    name: "categories/gcid:cinema_equipment_supplier",
    displayName: "Cinema equipment supplier",
  },
  {
    name: "categories/gcid:circus",
    displayName: "Circus",
  },
  {
    name: "categories/gcid:citizen_information_bureau",
    displayName: "Citizen information bureau",
  },
  {
    name: "categories/gcid:citizens_advice_bureau",
    displayName: "Citizens advice bureau",
  },
  {
    name: "categories/gcid:citroen_dealer",
    displayName: "Citroen dealer",
  },
  {
    name: "categories/gcid:city_administration",
    displayName: "City administration",
  },
  {
    name: "categories/gcid:city_clerks_office",
    displayName: "City clerk's office",
  },
  {
    name: "categories/gcid:city_courthouse",
    displayName: "City courthouse",
  },
  {
    name: "categories/gcid:city_department_of_environment",
    displayName: "City Department of Environment",
  },
  {
    name: "categories/gcid:city_department_of_public_safety",
    displayName: "City Department of Public Safety",
  },
  {
    name: "categories/gcid:city_department_of_transportation",
    displayName: "City department of transportation",
  },
  {
    name: "categories/gcid:city_district_office",
    displayName: "City district office",
  },
  {
    name: "categories/gcid:city_employment_department",
    displayName: "City employment department",
  },
  {
    name: "categories/gcid:city_government_office",
    displayName: "City government office",
  },
  {
    name: "categories/gcid:city_hall",
    displayName: "Town Hall",
  },
  {
    name: "categories/gcid:city_park",
    displayName: "City park",
  },
  {
    name: "categories/gcid:city_pillar_shine",
    displayName: "City pillar shrine",
  },
  {
    name: "categories/gcid:city_tax_office",
    displayName: "City Tax Office",
  },
  {
    name: "categories/gcid:civic_center",
    displayName: "Civic Centre",
  },
  {
    name: "categories/gcid:civil_defence",
    displayName: "Civil defense",
  },
  {
    name: "categories/gcid:civil_engineer",
    displayName: "Civil Engineering",
  },
  {
    name: "categories/gcid:civil_engineering_company",
    displayName: "Civil engineering company",
  },
  {
    name: "categories/gcid:civil_examinations_academy",
    displayName: "Civil examinations academy",
  },
  {
    name: "categories/gcid:civil_law_attorney",
    displayName: "Civil law attorney",
  },
  {
    name: "categories/gcid:civil_police",
    displayName: "Civil police",
  },
  {
    name: "categories/gcid:civil_registry",
    displayName: "Civil registry",
  },
  {
    name: "categories/gcid:class",
    displayName: "Class",
  },
  {
    name: "categories/gcid:classified_ads_newspaper_publisher",
    displayName: "Classified ads newspaper publisher",
  },
  {
    name: "categories/gcid:cleaners",
    displayName: "Cleaning Services",
  },
  {
    name: "categories/gcid:cleaning_products_supplier",
    displayName: "Cleaning products supplier",
  },
  {
    name: "categories/gcid:clergyman",
    displayName: "Clergyman",
  },
  {
    name: "categories/gcid:clock_repair_service",
    displayName: "Clock repair service",
  },
  {
    name: "categories/gcid:clock_watch_maker",
    displayName: "Clock watch maker",
  },
  {
    name: "categories/gcid:closed_circuit_television",
    displayName: "Closed circuit television",
  },
  {
    name: "categories/gcid:clothes_and_fabric_manufacturer",
    displayName: "Clothes and fabric manufacturer",
  },
  {
    name: "categories/gcid:clothes_and_fabric_wholesaler",
    displayName: "Clothes and fabric wholesaler",
  },
  {
    name: "categories/gcid:clothes_market",
    displayName: "Clothes market",
  },
  {
    name: "categories/gcid:clothing_alteration_service",
    displayName: "Clothing alteration service",
  },
  {
    name: "categories/gcid:clothing_manufacture",
    displayName: "Clothing manufacturer",
  },
  {
    name: "categories/gcid:clothing_store",
    displayName: "Clothing Shop",
  },
  {
    name: "categories/gcid:clothing_supplier",
    displayName: "Clothing supplier",
  },
  {
    name: "categories/gcid:clothing_wholesale_market_place",
    displayName: "Clothing wholesale market place",
  },
  {
    name: "categories/gcid:clothing_wholesaler",
    displayName: "Clothing wholesaler",
  },
  {
    name: "categories/gcid:club",
    displayName: "Club",
  },
  {
    name: "categories/gcid:cng_fittment_center",
    displayName: "CNG Fitment Center",
  },
  {
    name: "categories/gcid:cng_station",
    displayName: "Compressed natural gas station",
  },
  {
    name: "categories/gcid:coaching_center",
    displayName: "Coaching Center",
  },
  {
    name: "categories/gcid:coal_exporter",
    displayName: "Coal Exporter",
  },
  {
    name: "categories/gcid:coal_supplier",
    displayName: "Coal Supplier",
  },
  {
    name: "categories/gcid:coalfield",
    displayName: "Coalfield",
  },
  {
    name: "categories/gcid:coast_guard_station",
    displayName: "Coast guard station",
  },
  {
    name: "categories/gcid:coat_wholesaler",
    displayName: "Coat wholesaler",
  },
  {
    name: "categories/gcid:cocktail_bar",
    displayName: "Cocktail bar",
  },
  {
    name: "categories/gcid:coed_school",
    displayName: "Co-ed school",
  },
  {
    name: "categories/gcid:coffee_machine_supplier",
    displayName: "Coffee machine supplier",
  },
  {
    name: "categories/gcid:coffee_roasters",
    displayName: "Coffee roasters",
  },
  {
    name: "categories/gcid:coffee_shop",
    displayName: "Coffee shop",
  },
  {
    name: "categories/gcid:coffee_stand",
    displayName: "Coffee stand",
  },
  {
    name: "categories/gcid:coffee_store",
    displayName: "Coffee store",
  },
  {
    name: "categories/gcid:coffee_vending_machine",
    displayName: "Coffee vending machine",
  },
  {
    name: "categories/gcid:coffee_wholesaler",
    displayName: "Coffee wholesaler",
  },
  {
    name: "categories/gcid:coffin_supplier",
    displayName: "Coffin Supplier",
  },
  {
    name: "categories/gcid:coin_dealer",
    displayName: "Coin dealer",
  },
  {
    name: "categories/gcid:coin_operated_laundry_equipment_supplier",
    displayName: "Coin operated laundry equipment supplier",
  },
  {
    name: "categories/gcid:coin_operated_locker",
    displayName: "Coin operated locker",
  },

  {
    name: "categories/gcid:cold_noodle_restaurant",
    displayName: "Cold noodle restaurant",
  },
  {
    name: "categories/gcid:cold_storage_facility",
    displayName: "Cold storage facility",
  },
  {
    name: "categories/gcid:collectibles_store",
    displayName: "Collectibles Shop",
  },
  {
    name: "categories/gcid:college",
    displayName: "College",
  },
  {
    name: "categories/gcid:college_of_agriculture",
    displayName: "College of agriculture",
  },
  {
    name: "categories/gcid:colombian_restaurant",
    displayName: "Colombian restaurant",
  },
  {
    name: "categories/gcid:combined_primary_and_secondary_school",
    displayName: "Combined primary and secondary school",
  },
  {
    name: "categories/gcid:comedy_club",
    displayName: "Comedy club",
  },
  {
    name: "categories/gcid:comic_book_store",
    displayName: "Comic book shop",
  },
  {
    name: "categories/gcid:comic_cafe",
    displayName: "Comic cafe",
  },
  {
    name: "categories/gcid:commercial_agent",
    displayName: "Commercial agent",
  },
  {
    name: "categories/gcid:commercial_cleaning_service",
    displayName: "Commercial cleaning service",
  },
  {
    name: "categories/gcid:commercial_printer",
    displayName: "Commercial printer",
  },
  {
    name: "categories/gcid:commercial_real_estate_agency",
    displayName: "Commercial property estate agent",
  },
  {
    name: "categories/gcid:commercial_real_estate_inspector",
    displayName: "Commercial Property Inspector",
  },
  {
    name: "categories/gcid:commercial_refrigeration",
    displayName: "Commercial refrigeration",
  },
  {
    name: "categories/gcid:commercial_refrigerator_supplier",
    displayName: "Commercial refrigerator supplier",
  },
  {
    name: "categories/gcid:commissioner_for_oaths",
    displayName: "Commissioner of Oath",
  },
  {
    name: "categories/gcid:communications_central",
    displayName: "Communications central",
  },
  {
    name: "categories/gcid:community_center",
    displayName: "Community centre",
  },
  {
    name: "categories/gcid:community_college",
    displayName: "Community college",
  },
  {
    name: "categories/gcid:community_garden",
    displayName: "Community garden",
  },
  {
    name: "categories/gcid:community_health_center",
    displayName: "Community health centre",
  },
  {
    name: "categories/gcid:community_school",
    displayName: "Community school",
  },
  {
    name: "categories/gcid:company_registry",
    displayName: "Commercial Register",
  },
  {
    name: "categories/gcid:comprehensive_secondary_school",
    displayName: "Comprehensive secondary school",
  },
  {
    name: "categories/gcid:computer_accessories_store",
    displayName: "Computer Accessories Shop",
  },
  {
    name: "categories/gcid:computer_club",
    displayName: "Computer club",
  },
  {
    name: "categories/gcid:computer_consultant",
    displayName: "Computer consultant",
  },
  {
    name: "categories/gcid:computer_desk_store",
    displayName: "Computer desk store",
  },
  {
    name: "categories/gcid:computer_hardware_manufacturer",
    displayName: "Computer Hardware Company",
  },
  {
    name: "categories/gcid:computer_networking_center",
    displayName: "Computer Networking Center",
  },
  {
    name: "categories/gcid:computer_rental_agency",
    displayName: "Computer Rental Agency",
  },
  {
    name: "categories/gcid:computer_repair_service",
    displayName: "Computer repair service",
  },
  {
    name: "categories/gcid:computer_security_service",
    displayName: "IT security service",
  },
  {
    name: "categories/gcid:computer_service",
    displayName: "Computer service",
  },
  {
    name: "categories/gcid:computer_software_store",
    displayName: "Computer Software Shop",
  },
  {
    name: "categories/gcid:computer_store",
    displayName: "Computer Shop",
  },
  {
    name: "categories/gcid:computer_support_and_services",
    displayName: "IT support and services",
  },
  {
    name: "categories/gcid:computer_training_school",
    displayName: "School of Computing",
  },
  {
    name: "categories/gcid:computer_wholesaler",
    displayName: "Computer Wholesaler",
  },
  {
    name: "categories/gcid:concert_hall",
    displayName: "Concert hall",
  },
  {
    name: "categories/gcid:concrete_contractor",
    displayName: "Concrete contractor",
  },
  {
    name: "categories/gcid:concrete_factory",
    displayName: "Concrete factory",
  },
  {
    name: "categories/gcid:concrete_metal_framework_supplier",
    displayName: "Concrete metal framework supplier",
  },
  {
    name: "categories/gcid:concrete_product_supplier",
    displayName: "Concrete Supplier",
  },
  {
    name: "categories/gcid:condiments_supplier",
    displayName: "Condiments supplier",
  },
  {
    name: "categories/gcid:condominium_complex",
    displayName: "Apartment complex",
  },
  {
    name: "categories/gcid:condominium_rental_agency",
    displayName: "Apartment Rental Agency",
  },
  {
    name: "categories/gcid:confectionery",
    displayName: "Confectionery",
  },
  {
    name: "categories/gcid:confectionery_wholesaler",
    displayName: "Confectionery wholesaler",
  },
  {
    name: "categories/gcid:conference_center",
    displayName: "Conference Centre",
  },
  {
    name: "categories/gcid:congregation",
    displayName: "Congregation",
  },
  {
    name: "categories/gcid:conservation_department",
    displayName: "Environmental Conservation Department",
  },
  {
    name: "categories/gcid:conservative_club",
    displayName: "Conservative club",
  },
  {
    name: "categories/gcid:conservative_synagogue",
    displayName: "Conservative synagogue",
  },
  {
    name: "categories/gcid:conservatory_construction_contractor",
    displayName: "Conservatory Contractor",
  },
  {
    name: "categories/gcid:conservatory_of_music",
    displayName: "Conservatoire",
  },
  {
    name: "categories/gcid:conservatory_specialist",
    displayName: "Conservatory supply & installation",
  },
  {
    name: "categories/gcid:consignment_shop",
    displayName: "Second-hand shop",
  },
  {
    name: "categories/gcid:construction_and_maintenance_office",
    displayName: "Construction and maintenance office",
  },
  {
    name: "categories/gcid:construction_company",
    displayName: "Real Estate Builders & Construction Company",
  },
  {
    name: "categories/gcid:construction_equipment_supplier",
    displayName: "Construction equipment supplier",
  },
  {
    name: "categories/gcid:construction_machine_dealer",
    displayName: "Construction machine dealer",
  },
  {
    name: "categories/gcid:construction_machine_rental_service",
    displayName: "Construction machine rental service",
  },
  {
    name: "categories/gcid:construction_material_wholesaler",
    displayName: "Construction Material Wholesaler",
  },
  {
    name: "categories/gcid:consultant",
    displayName: "Consultant",
  },
  {
    name: "categories/gcid:consumer_advice_center",
    displayName: "Consumer Advice Centre",
  },
  {
    name: "categories/gcid:contact_lenses_supplier",
    displayName: "Contact lenses supplier",
  },
  {
    name: "categories/gcid:container_service",
    displayName: "Container service",
  },
  {
    name: "categories/gcid:container_supplier",
    displayName: "Container Supplier",
  },
  {
    name: "categories/gcid:container_terminal",
    displayName: "Container terminal",
  },
  {
    name: "categories/gcid:containers_supplier",
    displayName: "Containers supplier",
  },
  {
    name: "categories/gcid:contemporary_louisiana_restaurant",
    displayName: "Contemporary Louisiana restaurant",
  },
  {
    name: "categories/gcid:continental_restaurant",
    displayName: "Continental restaurant",
  },
  {
    name: "categories/gcid:contractor",
    displayName: "Contractor",
  },
  {
    name: "categories/gcid:convenience_store",
    displayName: "Convenience Store",
  },
  {
    name: "categories/gcid:convention_center",
    displayName: "Convention centre",
  },
  {
    name: "categories/gcid:convention_information_bureau",
    displayName: "Convention information bureau",
  },
  {
    name: "categories/gcid:conveyancer",
    displayName: "Conveyancer",
  },
  {
    name: "categories/gcid:cookie_shop",
    displayName: "Biscuit Shop",
  },
  {
    name: "categories/gcid:cooking_class",
    displayName: "Cooking Class",
  },
  {
    name: "categories/gcid:cooking_school",
    displayName: "Cooking school",
  },
  {
    name: "categories/gcid:cooling_plant",
    displayName: "Cooling plant",
  },
  {
    name: "categories/gcid:cooperative_bank",
    displayName: "Cooperative bank",
  },
  {
    name: "categories/gcid:copier_repair_service",
    displayName: "Copier repair service",
  },
  {
    name: "categories/gcid:copper_supplier",
    displayName: "Copper Supplier",
  },
  {
    name: "categories/gcid:coppersmith",
    displayName: "Coppersmith",
  },
  {
    name: "categories/gcid:copy_shop",
    displayName: "Copy shop",
  },
  {
    name: "categories/gcid:copying_supply_store",
    displayName: "Copying Supply Shop",
  },
  {
    name: "categories/gcid:corporate_campus",
    displayName: "Business Park",
  },
  {
    name: "categories/gcid:corporate_entertainment_service",
    displayName: "Corporate entertainment service",
  },
  {
    name: "categories/gcid:corporate_gift_supplier",
    displayName: "Corporate gift supplier",
  },
  {
    name: "categories/gcid:corporate_office",
    displayName: "Corporate office",
  },
  {
    name: "categories/gcid:correctional_services_department",
    displayName: "Corrections Department",
  },
  {
    name: "categories/gcid:cosmetic_dentist",
    displayName: "Cosmetic dentist",
  },
  {
    name: "categories/gcid:cosmetic_products_manufacturer",
    displayName: "Cosmetic Products Manufacturer",
  },
  {
    name: "categories/gcid:cosmetic_surgeon",
    displayName: "Cosmetic surgeon",
  },
  {
    name: "categories/gcid:cosmetics_and_parfumes_supplier",
    displayName: "Cosmetics and perfumes supplier",
  },
  {
    name: "categories/gcid:cosmetics_industry",
    displayName: "Cosmetics industry",
  },
  {
    name: "categories/gcid:cosmetics_store",
    displayName: "Cosmetics shop",
  },
  {
    name: "categories/gcid:cosmetics_wholesaler",
    displayName: "Cosmetics wholesaler",
  },
  {
    name: "categories/gcid:cosplay_cafe",
    displayName: "Cosplay cafe",
  },
  {
    name: "categories/gcid:costa_rican_restaurant",
    displayName: "Costa Rican restaurant",
  },
  {
    name: "categories/gcid:costume_jewelry_shop",
    displayName: "Costume Jewellery Shop",
  },
  {
    name: "categories/gcid:costume_rental_service",
    displayName: "Costume hire service",
  },
  {
    name: "categories/gcid:costume_store",
    displayName: "Costume shop",
  },
  {
    name: "categories/gcid:cottage",
    displayName: "Cottage",
  },
  {
    name: "categories/gcid:cottage_rental",
    displayName: "Cottage rental",
  },
  {
    name: "categories/gcid:cotton_exporter",
    displayName: "Cotton Exporter",
  },
  {
    name: "categories/gcid:cotton_mill",
    displayName: "Cotton mill",
  },
  {
    name: "categories/gcid:cotton_supplier",
    displayName: "Cotton Supplier",
  },
  {
    name: "categories/gcid:council",
    displayName: "Council",
  },
  {
    name: "categories/gcid:counselor",
    displayName: "Counsellor",
  },
  {
    name: "categories/gcid:countertop_contractor",
    displayName: "Countertop contractor",
  },
  {
    name: "categories/gcid:countertop_store",
    displayName: "Kitchenware Shop",
  },
  {
    name: "categories/gcid:country_club",
    displayName: "Country club",
  },
  {
    name: "categories/gcid:country_food_restaurant",
    displayName: "Country food restaurant",
  },
  {
    name: "categories/gcid:country_house",
    displayName: "Country house",
  },
  {
    name: "categories/gcid:country_park",
    displayName: "Country park",
  },
  {
    name: "categories/gcid:county_government_office",
    displayName: "County Government Office",
  },
  {
    name: "categories/gcid:courier_service",
    displayName: "Courier service",
  },
  {
    name: "categories/gcid:court_executive_officer",
    displayName: "Court executive officer",
  },
  {
    name: "categories/gcid:court_reporter",
    displayName: "Court reporter",
  },
  {
    name: "categories/gcid:couscous_restaurant",
    displayName: "Couscous restaurant",
  },
  {
    name: "categories/gcid:couture_store",
    displayName: "Couture store",
  },
  {
    name: "categories/gcid:coworking_space",
    displayName: "Co-working Space",
  },
  {
    name: "categories/gcid:crab_dish_restaurant",
    displayName: "Crab restaurant",
  },
  {
    name: "categories/gcid:craft_store",
    displayName: "Craft shop",
  },
  {
    name: "categories/gcid:cramming_school",
    displayName: "Cramming school",
  },
  {
    name: "categories/gcid:crane_dealer",
    displayName: "Crane Dealer and Manufacturer",
  },
  {
    name: "categories/gcid:crane_rental_agency",
    displayName: "Crane Rental Agency",
  },
  {
    name: "categories/gcid:crane_service",
    displayName: "Crane service",
  },
  {
    name: "categories/gcid:craniosacral_therapy",
    displayName: "Craniosacral therapy",
  },
  {
    name: "categories/gcid:creche",
    displayName: "Creche",
  },
  {
    name: "categories/gcid:credit_counseling_service",
    displayName: "Credit Counselling Service",
  },
  {
    name: "categories/gcid:credit_reporting_agency",
    displayName: "Credit reporting agency",
  },
  {
    name: "categories/gcid:credit_union",
    displayName: "Cooperative Bank",
  },
  {
    name: "categories/gcid:cremation_service",
    displayName: "Cremation Ground",
  },
  {
    name: "categories/gcid:creole_restaurant",
    displayName: "Creole restaurant",
  },
  {
    name: "categories/gcid:creperie",
    displayName: "Creperie",
  },
  {
    name: "categories/gcid:cricket_club",
    displayName: "Cricket club",
  },
  {
    name: "categories/gcid:cricket_ground",
    displayName: "Cricket ground",
  },
  {
    name: "categories/gcid:cricket_shop",
    displayName: "Cricket shop",
  },
  {
    name: "categories/gcid:crime_victim_service",
    displayName: "Crime Victims Service",
  },
  {
    name: "categories/gcid:criminal_law_attorney",
    displayName: "Criminal defence lawyer",
  },
  {
    name: "categories/gcid:croatian_restaurant",
    displayName: "Croatian restaurant",
  },
  {
    name: "categories/gcid:crop_grower",
    displayName: "Crop grower",
  },
  {
    name: "categories/gcid:croquet_club",
    displayName: "Croquet club",
  },
  {
    name: "categories/gcid:cruise_agency",
    displayName: "Cruise agency",
  },
  {
    name: "categories/gcid:cruise_line",
    displayName: "Cruise line company",
  },
  {
    name: "categories/gcid:cruise_terminal",
    displayName: "Cruise Terminal",
  },
  {
    name: "categories/gcid:crushed_stone_supplier",
    displayName: "Crushed stone supplier",
  },
  {
    name: "categories/gcid:crypto_atm",
    displayName: "Crypto ATM",
  },
  {
    name: "categories/gcid:cuban_restaurant",
    displayName: "Cuban restaurant",
  },
  {
    name: "categories/gcid:culinary_school",
    displayName: "Cookery School",
  },
  {
    name: "categories/gcid:cultural_association",
    displayName: "Cultural association",
  },
  {
    name: "categories/gcid:cultural_center",
    displayName: "Cultural centre",
  },
  {
    name: "categories/gcid:cultural_landmark",
    displayName: "Cultural landmark",
  },
  {
    name: "categories/gcid:cupcake_shop",
    displayName: "Cupcake shop",
  },
  {
    name: "categories/gcid:cupra_dealer",
    displayName: "Cupra dealer",
  },
  {
    name: "categories/gcid:cured_ham_bar",
    displayName: "Cured ham bar",
  },
  {
    name: "categories/gcid:cured_ham_store",
    displayName: "Cured Ham Shop",
  },
  {
    name: "categories/gcid:cured_ham_warehouse",
    displayName: "Cured ham warehouse",
  },
  {
    name: "categories/gcid:curling_club",
    displayName: "Curling Club",
  },
  {
    name: "categories/gcid:curling_hall",
    displayName: "Curling hall",
  },
  {
    name: "categories/gcid:currency_exchange_service",
    displayName: "Currency exchange service",
  },
  {
    name: "categories/gcid:curtain_and_upholstery_cleaner",
    displayName: "Curtain and upholstery cleaning service",
  },
  {
    name: "categories/gcid:curtain_store",
    displayName: "Curtain Shop",
  },
  {
    name: "categories/gcid:curtain_supplier_and_maker",
    displayName: "Curtain Maker and Retailer",
  },
  {
    name: "categories/gcid:custom_confiscated_goods_store",
    displayName: "Custom Confiscated Goods Store",
  },
  {
    name: "categories/gcid:custom_home_builder",
    displayName: "Custom home builder",
  },
  {
    name: "categories/gcid:custom_label_printer",
    displayName: "Custom label printer",
  },
  {
    name: "categories/gcid:custom_t_shirt_store",
    displayName: "Custom T-shirt Shop",
  },
  {
    name: "categories/gcid:custom_tailor",
    displayName: "Bespoke Tailor",
  },
  {
    name: "categories/gcid:customs_broker",
    displayName: "Customs broker",
  },
  {
    name: "categories/gcid:customs_consultant",
    displayName: "Customs Consultant",
  },
  {
    name: "categories/gcid:customs_department",
    displayName: "Customs department",
  },
  {
    name: "categories/gcid:customs_office",
    displayName: "Customs office",
  },
  {
    name: "categories/gcid:customs_warehouse",
    displayName: "Customs warehouse",
  },
  {
    name: "categories/gcid:cutlery_store",
    displayName: "Cutlery Shop",
  },
  {
    name: "categories/gcid:cycle_rickshaw_stand",
    displayName: "Cycle rickshaw stand",
  },
  {
    name: "categories/gcid:cycling_park",
    displayName: "Cycling park",
  },
  {
    name: "categories/gcid:czech_restaurant",
    displayName: "Czech restaurant",
  },
  {
    name: "categories/gcid:dacia_dealer",
    displayName: "Dacia dealer",
  },
  {
    name: "categories/gcid:daihatsu_dealer",
    displayName: "Daihatsu dealer",
  },
  {
    name: "categories/gcid:dairy",
    displayName: "Dairy",
  },
  {
    name: "categories/gcid:dairy_farm",
    displayName: "Dairy farm",
  },
  {
    name: "categories/gcid:dairy_farm_equipment_supplier",
    displayName: "Dairy farm equipment supplier",
  },
  {
    name: "categories/gcid:dairy_store",
    displayName: "Dairy Products Shop",
  },
  {
    name: "categories/gcid:dairy_supplier",
    displayName: "Dairy Products Supplier",
  },
  {
    name: "categories/gcid:dan_dan_noodle_restaurant",
    displayName: "Dan Dan noodle restaurant",
  },
  {
    name: "categories/gcid:dance_club",
    displayName: "Dance club",
  },
  {
    name: "categories/gcid:dance_company",
    displayName: "Dance company",
  },
  {
    name: "categories/gcid:dance_conservatory",
    displayName: "Dance conservatory",
  },
  {
    name: "categories/gcid:dance_hall",
    displayName: "Dance hall",
  },
  {
    name: "categories/gcid:dance_pavillion",
    displayName: "Dance pavillion",
  },
  {
    name: "categories/gcid:dance_restaurant",
    displayName: "Dance restaurant",
  },
  {
    name: "categories/gcid:dance_school",
    displayName: "Dance school",
  },
  {
    name: "categories/gcid:dance_store",
    displayName: "Dance Shop",
  },
  {
    name: "categories/gcid:danish_restaurant",
    displayName: "Danish restaurant",
  },
  {
    name: "categories/gcid:dart_bar",
    displayName: "Dart bar",
  },
  {
    name: "categories/gcid:dart_supply_store",
    displayName: "Dart Supply Shop",
  },
  {
    name: "categories/gcid:data_entry_service",
    displayName: "Data Entry Service Provider",
  },
  {
    name: "categories/gcid:data_recovery_service",
    displayName: "Data recovery service",
  },
  {
    name: "categories/gcid:database_management_company",
    displayName: "Database Management Company",
  },
  {
    name: "categories/gcid:dating_service",
    displayName: "Dating Service Agency",
  },
  {
    name: "categories/gcid:day_care_center",
    displayName: "Day Care Center",
  },
  {
    name: "categories/gcid:day_spa",
    displayName: "Day spa",
  },
  {
    name: "categories/gcid:deaf_church",
    displayName: "Deaf church",
  },
  {
    name: "categories/gcid:deaf_service",
    displayName: "Deaf service",
  },
  {
    name: "categories/gcid:dealer_of_fiat_professional",
    displayName: "Dealer of Fiat Professional",
  },
  {
    name: "categories/gcid:debris_removal_service",
    displayName: "Debris removal service",
  },
  {
    name: "categories/gcid:debt_collecting",
    displayName: "Debt collecting",
  },
  {
    name: "categories/gcid:debt_collection_agency",
    displayName: "Debt Collection Agency",
  },
  {
    name: "categories/gcid:decal_supplier",
    displayName: "Decal supplier",
  },
  {
    name: "categories/gcid:deck_builder",
    displayName: "Deck builder",
  },
  {
    name: "categories/gcid:defence_company",
    displayName: "Defence Company",
  },
  {
    name: "categories/gcid:defence_museum",
    displayName: "Defence Museum",
  },
  {
    name: "categories/gcid:deli",
    displayName: "Deli",
  },
  {
    name: "categories/gcid:delivery_chinese_restaurant",
    displayName: "Delivery Chinese restaurant",
  },
  {
    name: "categories/gcid:delivery_service",
    displayName: "Delivery service",
  },
  {
    name: "categories/gcid:demolition_contractor",
    displayName: "Demolition Contractor",
  },
  {
    name: "categories/gcid:denim_wear_store",
    displayName: "Jeans shop",
  },
  {
    name: "categories/gcid:dental_clinic",
    displayName: "Dental clinic",
  },
  {
    name: "categories/gcid:dental_hygienist",
    displayName: "Dental hygienist",
  },
  {
    name: "categories/gcid:dental_implants_periodontist",
    displayName: "Dental implants periodontist",
  },
  {
    name: "categories/gcid:dental_implants_provider",
    displayName: "Dental implants provider",
  },
  {
    name: "categories/gcid:dental_insurance_agency",
    displayName: "Dental insurance agency",
  },
  {
    name: "categories/gcid:dental_lab",
    displayName: "Dental laboratory",
  },
  {
    name: "categories/gcid:dental_radiology",
    displayName: "Dental radiology",
  },
  {
    name: "categories/gcid:dental_school",
    displayName: "Dental school",
  },
  {
    name: "categories/gcid:dental_supply_store",
    displayName: "Dental Supply Shop",
  },
  {
    name: "categories/gcid:dentist",
    displayName: "Dentist",
  },
  {
    name: "categories/gcid:denture_care_center",
    displayName: "Denture Care Centre",
  },
  {
    name: "categories/gcid:department_for_regional_development",
    displayName: "Department for Regional Development",
  },
  {
    name: "categories/gcid:department_of_education",
    displayName: "Education Department",
  },
  {
    name: "categories/gcid:department_of_finance",
    displayName: "Department of finance",
  },
  {
    name: "categories/gcid:department_of_housing",
    displayName: "Department of housing",
  },
  {
    name: "categories/gcid:department_of_motor_vehicles",
    displayName: "Department of Motor Vehicles",
  },
  {
    name: "categories/gcid:department_of_public_safety",
    displayName: "Department of Public Safety",
  },
  {
    name: "categories/gcid:department_of_social_services",
    displayName: "Department of Social Services",
  },
  {
    name: "categories/gcid:department_of_transportation",
    displayName: "Department of Transportation",
  },
  {
    name: "categories/gcid:department_store",
    displayName: "Department store",
  },
  {
    name: "categories/gcid:dept_of_city_treasure",
    displayName: "Dept of City Treasure",
  },
  {
    name: "categories/gcid:dept_of_state_treasure",
    displayName: "Department of State Treasure",
  },
  {
    name: "categories/gcid:dermatologist",
    displayName: "Dermatologist",
  },
  {
    name: "categories/gcid:desalination_plant",
    displayName: "Desalination plant",
  },
  {
    name: "categories/gcid:design_agency",
    displayName: "Design agency",
  },
  {
    name: "categories/gcid:design_engineer",
    displayName: "Design engineer",
  },
  {
    name: "categories/gcid:design_institute",
    displayName: "Design institute",
  },
  {
    name: "categories/gcid:designer_clothing_store",
    displayName: "Designer Clothing Store",
  },
  {
    name: "categories/gcid:desktop_publishing_service",
    displayName: "Desktop publishing service",
  },
  {
    name: "categories/gcid:dessert_buffet",
    displayName: "Sweets and dessert buffet",
  },
  {
    name: "categories/gcid:dessert_restaurant",
    displayName: "Dessert restaurant",
  },
  {
    name: "categories/gcid:dessert_shop",
    displayName: "Dessert shop",
  },
  {
    name: "categories/gcid:detention_center",
    displayName: "Detention center",
  },
  {
    name: "categories/gcid:dhaba",
    displayName: "Dhaba",
  },
  {
    name: "categories/gcid:dharamashala",
    displayName: "Dharamashala",
  },
  {
    name: "categories/gcid:diabetes_center",
    displayName: "Diabetes Centre",
  },
  {
    name: "categories/gcid:diabetes_equipment_supplier",
    displayName: "Diabetes equipment supplier",
  },
  {
    name: "categories/gcid:diabetologist",
    displayName: "Diabetologist",
  },
  {
    name: "categories/gcid:diagnostic_center",
    displayName: "Diagnostic centre",
  },
  {
    name: "categories/gcid:dialysis_center",
    displayName: "Dialysis Centre",
  },
  {
    name: "categories/gcid:diamond_buyer",
    displayName: "Diamond buyer",
  },
  {
    name: "categories/gcid:diamond_dealer",
    displayName: "Diamond Merchant",
  },
  {
    name: "categories/gcid:diaper_service",
    displayName: "Nappy Service",
  },
  {
    name: "categories/gcid:diesel_engine_dealer",
    displayName: "Diesel engine dealer",
  },
  {
    name: "categories/gcid:diesel_engine_repair_service",
    displayName: "Diesel engine repair service",
  },
  {
    name: "categories/gcid:diesel_fuel_supplier",
    displayName: "Diesel fuel supplier",
  },
  {
    name: "categories/gcid:dietitian",
    displayName: "Dietitian",
  },
  {
    name: "categories/gcid:digital_printer",
    displayName: "Digital printer",
  },
  {
    name: "categories/gcid:digital_printing_service",
    displayName: "Digital printing service",
  },
  {
    name: "categories/gcid:dim_sum_restaurant",
    displayName: "Dim Sum restaurant",
  },
  {
    name: "categories/gcid:diner",
    displayName: "Diner",
  },
  {
    name: "categories/gcid:dinner_theater",
    displayName: "Dinner theatre",
  },
  {
    name: "categories/gcid:direct_mail_advertising",
    displayName: "Direct mail advertising",
  },
  {
    name: "categories/gcid:dirt_supplier",
    displayName: "Dirt supplier",
  },
  {
    name: "categories/gcid:disability_equipment_supplier",
    displayName: "Disability equipment supplier",
  },
  {
    name: "categories/gcid:disability_services_and_support_organization",
    displayName: "Disability services and support organization",
  },
  {
    name: "categories/gcid:disabled_sports_center",
    displayName: "Disabled Sports Center",
  },
  {
    name: "categories/gcid:disc_golf_course",
    displayName: "Disc golf course",
  },
  {
    name: "categories/gcid:disciples_of_christ_church",
    displayName: "Disciples of Christ Church",
  },
  {
    name: "categories/gcid:disco",
    displayName: "Night Club",
  },
  {
    name: "categories/gcid:discount_store",
    displayName: "Discount shop",
  },
  {
    name: "categories/gcid:discount_supermarket",
    displayName: "Discount supermarket",
  },
  {
    name: "categories/gcid:display_home_center",
    displayName: "Display home centre",
  },
  {
    name: "categories/gcid:display_stand_manufacturer",
    displayName: "Display stand manufacturer",
  },
  {
    name: "categories/gcid:disposable_items_shop",
    displayName: "Disposable Items shop",
  },
  {
    name: "categories/gcid:disposable_tableware_supplier",
    displayName: "Disposable tableware supplier",
  },
  {
    name: "categories/gcid:distance_learning_center",
    displayName: "Distance Learning Center",
  },
  {
    name: "categories/gcid:distillery",
    displayName: "Distillery",
  },
  {
    name: "categories/gcid:distribution_service",
    displayName: "Supplier",
  },
  {
    name: "categories/gcid:district_attorney",
    displayName: "District attorney",
  },
  {
    name: "categories/gcid:district_council",
    displayName: "District Council",
  },
  {
    name: "categories/gcid:district_government_office",
    displayName: "Local government office",
  },
  {
    name: "categories/gcid:district_justice",
    displayName: "District Justice",
  },
  {
    name: "categories/gcid:district_office",
    displayName: "District Office",
  },
  {
    name: "categories/gcid:dive_club",
    displayName: "Diving Club",
  },
  {
    name: "categories/gcid:dive_shop",
    displayName: "Dive shop",
  },
  {
    name: "categories/gcid:diving_center",
    displayName: "Diving Centre",
  },
  {
    name: "categories/gcid:diving_service",
    displayName: "Diving contractor",
  },
  {
    name: "categories/gcid:divorce_attorney",
    displayName: "Divorce lawyer",
  },
  {
    name: "categories/gcid:divorce_service",
    displayName: "Divorce service",
  },
  {
    name: "categories/gcid:dj",
    displayName: "DJ",
  },
  {
    name: "categories/gcid:dj_supply_store",
    displayName: "DJ Supply Shop",
  },
  {
    name: "categories/gcid:do_it_yourself_store",
    displayName: "DIY Store",
  },
  {
    name: "categories/gcid:dock_builder",
    displayName: "Dock builder",
  },
  {
    name: "categories/gcid:doctor",
    displayName: "Doctor",
  },
  {
    name: "categories/gcid:dodge_dealer",
    displayName: "Dodge dealer",
  },
  {
    name: "categories/gcid:dog_breeder",
    displayName: "Dog breeder",
  },
  {
    name: "categories/gcid:dog_cafe",
    displayName: "Dog cafe",
  },
  {
    name: "categories/gcid:dog_day_care_center",
    displayName: "Dog Day Care Centre",
  },
  {
    name: "categories/gcid:dog_park",
    displayName: "Dog park",
  },
  {
    name: "categories/gcid:dog_trainer",
    displayName: "Dog trainer",
  },
  {
    name: "categories/gcid:dog_walker",
    displayName: "Dog walker",
  },
  {
    name: "categories/gcid:dogsled_ride_service",
    displayName: "Dogsled ride service",
  },
  {
    name: "categories/gcid:dojo_restaurant",
    displayName: "Dojo restaurant",
  },
  {
    name: "categories/gcid:doll_restoration_service",
    displayName: "Doll restoration service",
  },
  {
    name: "categories/gcid:doll_store",
    displayName: "Doll Shop",
  },
  {
    name: "categories/gcid:dollar_store",
    displayName: "Pound Shop",
  },
  {
    name: "categories/gcid:domestic_abuse_treatment_center",
    displayName: "Domestic Abuse Treatment Centre",
  },
  {
    name: "categories/gcid:domestic_airport",
    displayName: "Domestic airport",
  },
  {
    name: "categories/gcid:dominican_restaurant",
    displayName: "Dominican restaurant",
  },
  {
    name: "categories/gcid:donations_center",
    displayName: "Donations Centre",
  },
  {
    name: "categories/gcid:doner_kebab_restaurant",
    displayName: "Doner kebab restaurant",
  },
  {
    name: "categories/gcid:donut_shop",
    displayName: "Doughnut Shop",
  },
  {
    name: "categories/gcid:door_manufacturer",
    displayName: "Door manufacturer",
  },
  {
    name: "categories/gcid:door_shop",
    displayName: "Door shop",
  },
  {
    name: "categories/gcid:door_supplier",
    displayName: "Door supplier",
  },
  {
    name: "categories/gcid:door_warehouse",
    displayName: "Door warehouse",
  },
  {
    name: "categories/gcid:double_glazing_supplier",
    displayName: "Double glazing installer",
  },
  {
    name: "categories/gcid:doula",
    displayName: "Doula",
  },
  {
    name: "categories/gcid:down_home_cooking_restaurant",
    displayName: "Southern Comfort Food Restaurant",
  },
  {
    name: "categories/gcid:drafting_equipment_supplier",
    displayName: "Drafting equipment supplier",
  },
  {
    name: "categories/gcid:drafting_service",
    displayName: "Drafting Service Center",
  },
  {
    name: "categories/gcid:drainage_service",
    displayName: "Drainage Service",
  },
  {
    name: "categories/gcid:drama_school",
    displayName: "Drama school",
  },
  {
    name: "categories/gcid:drama_theater",
    displayName: "Drama theater",
  },
  {
    name: "categories/gcid:drawing_lessons",
    displayName: "Drawing lessons",
  },
  {
    name: "categories/gcid:dress_and_tuxedo_rental_service",
    displayName: "Dress and tuxedo rental service",
  },
  {
    name: "categories/gcid:dress_shop",
    displayName: "Dress Shop",
  },
  {
    name: "categories/gcid:dressmaker",
    displayName: "Dressmaker",
  },
  {
    name: "categories/gcid:dried_flower_shop",
    displayName: "Dried flower shop",
  },
  {
    name: "categories/gcid:dried_seafood_store",
    displayName: "Dried Seafood Shop",
  },
  {
    name: "categories/gcid:drilling_contractor",
    displayName: "Drilling contractor",
  },
  {
    name: "categories/gcid:drilling_equipment_supplier",
    displayName: "Drilling equipment supplier",
  },
  {
    name: "categories/gcid:drinking_water_fountain",
    displayName: "Drinking-Water Fountain",
  },
  {
    name: "categories/gcid:drive_in_movie_theater",
    displayName: "Drive-in Cinema",
  },
  {
    name: "categories/gcid:driver_vehicle_licensing_agency",
    displayName: "Driver and vehicle licensing agency",
  },
  {
    name: "categories/gcid:drivers_license_office",
    displayName: "Driver's Licence Office",
  },
  {
    name: "categories/gcid:drivers_license_training_school",
    displayName: "Driving Licence Training School",
  },
  {
    name: "categories/gcid:driveshaft_shop",
    displayName: "Driveshaft shop",
  },
  {
    name: "categories/gcid:driving_school",
    displayName: "Driving school",
  },
  {
    name: "categories/gcid:driving_test_centre",
    displayName: "Driving test center",
  },
  {
    name: "categories/gcid:drone_shop",
    displayName: "Drone shop",
  },
  {
    name: "categories/gcid:drug_testing_service",
    displayName: "Drug Testing Laboratory",
  },
  {
    name: "categories/gcid:drugstore",
    displayName: "Chemist",
  },
  {
    name: "categories/gcid:drum_school",
    displayName: "Drum school",
  },
  {
    name: "categories/gcid:drum_store",
    displayName: "Drum Shop",
  },
  {
    name: "categories/gcid:dry_cleaner",
    displayName: "Dry cleaner",
  },
  {
    name: "categories/gcid:dry_fruit_store",
    displayName: "Dry Fruit Store",
  },
  {
    name: "categories/gcid:dry_ice_supplier",
    displayName: "Dry ice supplier",
  },
  {
    name: "categories/gcid:dry_wall_contractor",
    displayName: "Dry Wall Contractor",
  },
  {
    name: "categories/gcid:dry_wall_supply_store",
    displayName: "Dry Wall Supply Shop",
  },
  {
    name: "categories/gcid:ds_automobiles_dealer",
    displayName: "DS Automobiles dealer",
  },
  {
    name: "categories/gcid:dump_truck_dealer",
    displayName: "Dump truck dealer",
  },
  {
    name: "categories/gcid:dumpling_restaurant",
    displayName: "Dumpling restaurant",
  },
  {
    name: "categories/gcid:dumpster_rental_service",
    displayName: "Dumpster rental service",
  },
  {
    name: "categories/gcid:durum_restaurant",
    displayName: "Durum restaurant",
  },
  {
    name: "categories/gcid:dutch_restaurant",
    displayName: "Dutch restaurant",
  },
  {
    name: "categories/gcid:duty_free_store",
    displayName: "Duty Free Shop",
  },
  {
    name: "categories/gcid:dvd_store",
    displayName: "DVD Shop",
  },
  {
    name: "categories/gcid:dye_store",
    displayName: "Dye Store",
  },
  {
    name: "categories/gcid:dyeworks",
    displayName: "Dyeworks",
  },
  {
    name: "categories/gcid:dynamometer_supplier",
    displayName: "Dynamometer supplier",
  },
  {
    name: "categories/gcid:e_commerce_agency",
    displayName: "E - Commerce Agency",
  },
  {
    name: "categories/gcid:e_commerce_service",
    displayName: "E-commerce service",
  },
  {
    name: "categories/gcid:ear_piercing_service",
    displayName: "Ear-Piercing Service",
  },
  {
    name: "categories/gcid:earth_works_company",
    displayName: "Earthmoving Company",
  },
  {
    name: "categories/gcid:east_african_restaurant",
    displayName: "East African restaurant",
  },
  {
    name: "categories/gcid:east_javanese_restaurant",
    displayName: "East Javanese restaurant",
  },
  {
    name: "categories/gcid:eastern_european_restaurant",
    displayName: "Eastern European restaurant",
  },
  {
    name: "categories/gcid:eastern_orthodox_church",
    displayName: "Eastern Orthodox Church",
  },
  {
    name: "categories/gcid:eating_disorder_treatment_center",
    displayName: "Eating Disorder treatment Centre",
  },
  {
    name: "categories/gcid:eclectic_restaurant",
    displayName: "Eclectic restaurant",
  },
  {
    name: "categories/gcid:ecological_park",
    displayName: "Ecological park",
  },
  {
    name: "categories/gcid:ecologists_association",
    displayName: "Ecologists association",
  },
  {
    name: "categories/gcid:economic_consultant",
    displayName: "Economic Consultant",
  },
  {
    name: "categories/gcid:economic_development_agency",
    displayName: "Economic development agency",
  },
  {
    name: "categories/gcid:ecuadorian_restaurant",
    displayName: "Ecuadorian restaurant",
  },
  {
    name: "categories/gcid:education_center",
    displayName: "Education Centre",
  },
  {
    name: "categories/gcid:educational_consultant",
    displayName: "Educational consultant",
  },
  {
    name: "categories/gcid:educational_institution",
    displayName: "Educational institution",
  },
  {
    name: "categories/gcid:educational_supply_store",
    displayName: "Educational Supply Shop",
  },
  {
    name: "categories/gcid:educational_testing_service",
    displayName: "Educational testing service",
  },
  {
    name: "categories/gcid:eftpos_equipment_supplier",
    displayName: "Eftpos Equipment Supplier",
  },
  {
    name: "categories/gcid:egg_supplier",
    displayName: "Egg supplier",
  },
  {
    name: "categories/gcid:egyptian_restaurant",
    displayName: "Egyptian restaurant",
  },
  {
    name: "categories/gcid:elder_law_attorney",
    displayName: "Lawyer for the Elderly",
  },
  {
    name: "categories/gcid:electric_motor_repair_shop",
    displayName: "Electric motor repair shop",
  },
  {
    name: "categories/gcid:electric_motor_scooter_dealer",
    displayName: "Electric motor scooter dealer",
  },
  {
    name: "categories/gcid:electric_motor_store",
    displayName: "Electric Motor Shop",
  },
  {
    name: "categories/gcid:electric_motor_vehicle_dealer",
    displayName: "Electric motor vehicle dealer",
  },
  {
    name: "categories/gcid:electric_motorcycle_dealer",
    displayName: "Electric motorcycle dealer",
  },
  {
    name: "categories/gcid:electric_utility_company",
    displayName: "Electric Utility Company",
  },
  {
    name: "categories/gcid:electric_utility_manufacturer",
    displayName: "Electrical equipment manufacturer",
  },
  {
    name: "categories/gcid:electric_vehicle_charging_station",
    displayName: "Electric vehicle charging station",
  },
  {
    name: "categories/gcid:electric_vehicle_charging_station_contractor",
    displayName: "Electric vehicle charging station contractor",
  },
  {
    name: "categories/gcid:electrical_appliance_wholesaler",
    displayName: "Electrical appliance wholesaler",
  },
  {
    name: "categories/gcid:electrical_engineer",
    displayName: "Electrical engineer",
  },
  {
    name: "categories/gcid:electrical_equipment_supplier",
    displayName: "Electrical equipment supplier",
  },
  {
    name: "categories/gcid:electrical_installation_service",
    displayName: "Electrical installation service",
  },
  {
    name: "categories/gcid:electrical_repair_shop",
    displayName: "Electrical repair shop",
  },
  {
    name: "categories/gcid:electrical_substation",
    displayName: "Electrical Sub-station",
  },
  {
    name: "categories/gcid:electrical_supply_store",
    displayName: "Electrical supply shop",
  },
  {
    name: "categories/gcid:electrical_wholesaler",
    displayName: "Electrical wholesaler",
  },
  {
    name: "categories/gcid:electrician",
    displayName: "Electric Consultant",
  },
  {
    name: "categories/gcid:electricity_board",
    displayName: "Electricity Board",
  },
  {
    name: "categories/gcid:electrolysis_hair_removal_service",
    displayName: "Electrolysis hair removal service",
  },
  {
    name: "categories/gcid:electronic_engineer",
    displayName: "Electronic engineer",
  },
  {
    name: "categories/gcid:electronic_parts_supplier",
    displayName: "Electronic parts supplier",
  },
  {
    name: "categories/gcid:electronics_accessories_wholesaler",
    displayName: "Electronics Accessories Wholesaler",
  },
  {
    name: "categories/gcid:electronics_company",
    displayName: "Electronics Company",
  },
  {
    name: "categories/gcid:electronics_engineer",
    displayName: "Electronics Engineer",
  },
  {
    name: "categories/gcid:electronics_exporter",
    displayName: "Electronics Exporter",
  },
  {
    name: "categories/gcid:electronics_hire_shop",
    displayName: "Electronics hire shop",
  },
  {
    name: "categories/gcid:electronics_manufacturer",
    displayName: "Electronics manufacturer",
  },
  {
    name: "categories/gcid:electronics_repair_shop",
    displayName: "Electronics repair shop",
  },
  {
    name: "categories/gcid:electronics_store",
    displayName: "Electronics Retail and Repair Shop",
  },
  {
    name: "categories/gcid:electronics_vending_machine",
    displayName: "Electronics vending machine",
  },
  {
    name: "categories/gcid:electronics_wholesaler",
    displayName: "Electronics wholesaler",
  },

  {
    name: "categories/gcid:elevator_manufacturer",
    displayName: "Elevator Manufacturer",
  },
  {
    name: "categories/gcid:elevator_service",
    displayName: "Lift Service",
  },
  {
    name: "categories/gcid:embassy",
    displayName: "Embassy",
  },
  {
    name: "categories/gcid:embossing_service",
    displayName: "Embossing Service Provider",
  },
  {
    name: "categories/gcid:embroidery_service",
    displayName: "Embroidery service",
  },
  {
    name: "categories/gcid:embroidery_shop",
    displayName: "Embroidery shop",
  },
  {
    name: "categories/gcid:emergency_call_station",
    displayName: "Emergency Call Box",
  },
  {
    name: "categories/gcid:emergency_care_physician",
    displayName: "Emergency Care Physician",
  },
  {
    name: "categories/gcid:emergency_care_service",
    displayName: "Emergency care service",
  },
  {
    name: "categories/gcid:emergency_dental_service",
    displayName: "Emergency dental service",
  },
  {
    name: "categories/gcid:emergency_locksmith_service",
    displayName: "Emergency locksmith service",
  },
  {
    name: "categories/gcid:emergency_management_ministry",
    displayName: "Emergency management ministry",
  },
  {
    name: "categories/gcid:emergency_room",
    displayName: "Emergency department",
  },
  {
    name: "categories/gcid:emergency_training",
    displayName: "Emergency training",
  },
  {
    name: "categories/gcid:emergency_training_school",
    displayName: "Emergency training school",
  },
  {
    name: "categories/gcid:emergency_veterinarian_service",
    displayName: "Emergency veterinarian service",
  },
  {
    name: "categories/gcid:employment_agency",
    displayName: "Job Centre",
  },
  {
    name: "categories/gcid:employment_attorney",
    displayName: "Employment Lawyer",
  },
  {
    name: "categories/gcid:employment_center",
    displayName: "Employment Centre",
  },
  {
    name: "categories/gcid:employment_consultant",
    displayName: "Employment consultant",
  },
  {
    name: "categories/gcid:employment_search_service",
    displayName: "Employment search service",
  },
  {
    name: "categories/gcid:endocrinologist",
    displayName: "Endocrinologist",
  },
  {
    name: "categories/gcid:endodontist",
    displayName: "Endodontist",
  },
  {
    name: "categories/gcid:endoscopist",
    displayName: "Endoscopist",
  },
  {
    name: "categories/gcid:energy_equipment_and_solutions",
    displayName: "Energy equipment and solutions",
  },
  {
    name: "categories/gcid:energy_supplier",
    displayName: "Energy supplier",
  },
  {
    name: "categories/gcid:engine_rebuilding_service",
    displayName: "Engine Rebuilding Service Station",
  },
  {
    name: "categories/gcid:engineer",
    displayName: "Engineer",
  },
  {
    name: "categories/gcid:engineering_consultant",
    displayName: "Engineering consultant",
  },
  {
    name: "categories/gcid:engineering_school",
    displayName: "Engineering school",
  },
  {
    name: "categories/gcid:english_language_camp",
    displayName: "English language camp",
  },
  {
    name: "categories/gcid:english_language_instructor",
    displayName: "English language instructor",
  },
  {
    name: "categories/gcid:english_language_school",
    displayName: "English language school",
  },
  {
    name: "categories/gcid:english_restaurant",
    displayName: "English restaurant",
  },
  {
    name: "categories/gcid:engraver",
    displayName: "Engraver",
  },
  {
    name: "categories/gcid:entertainer",
    displayName: "Entertainer",
  },
  {
    name: "categories/gcid:entertainment_agency",
    displayName: "Entertainment agency",
  },
  {
    name: "categories/gcid:envelope_supplier",
    displayName: "Envelope supplier",
  },
  {
    name: "categories/gcid:environment_office",
    displayName: "Environment office",
  },
  {
    name: "categories/gcid:environment_renewable_natural_resources",
    displayName: "Environment renewable natural resources",
  },
  {
    name: "categories/gcid:environmental_consultant",
    displayName: "Environmental consultant",
  },
  {
    name: "categories/gcid:environmental_engineer",
    displayName: "Environmental engineer",
  },
  {
    name: "categories/gcid:environmental_health_service",
    displayName: "Environmental Service",
  },
  {
    name: "categories/gcid:environmental_organization",
    displayName: "Environmental organization",
  },
  {
    name: "categories/gcid:environmental_protection_organization",
    displayName: "Environmental Protection Organization",
  },
  {
    name: "categories/gcid:episcopal_church",
    displayName: "Church of England Church",
  },
  {
    name: "categories/gcid:equestrian_club",
    displayName: "Equestrian Club",
  },
  {
    name: "categories/gcid:equestrian_facility",
    displayName: "Equestrian Centre",
  },
  {
    name: "categories/gcid:equestrian_store",
    displayName: "Equestrian Shop",
  },
  {
    name: "categories/gcid:equipment_exporter",
    displayName: "Equipment Exporter",
  },
  {
    name: "categories/gcid:equipment_importer",
    displayName: "Equipment Importer",
  },
  {
    name: "categories/gcid:equipment_rental_agency",
    displayName: "Equipment rental agency",
  },
  {
    name: "categories/gcid:equipment_supplier",
    displayName: "Equipment supplier",
  },
  {
    name: "categories/gcid:eritrean_restaurant",
    displayName: "Eritrean restaurant",
  },
  {
    name: "categories/gcid:erotic_massage",
    displayName: "Erotic Massage",
  },
  {
    name: "categories/gcid:escape_room_center",
    displayName: "Escape room centre",
  },
  {
    name: "categories/gcid:escrow_service",
    displayName: "Escrow Services",
  },
  {
    name: "categories/gcid:espresso_bar",
    displayName: "Espresso bar",
  },
  {
    name: "categories/gcid:estate_appraiser",
    displayName: "Estate Valuer",
  },
  {
    name: "categories/gcid:estate_liquidator",
    displayName: "Estate liquidator",
  },
  {
    name: "categories/gcid:estate_planning_attorney",
    displayName: "Estate Planning Lawyer",
  },
  {
    name: "categories/gcid:ethiopian_restaurant",
    displayName: "Ethiopian restaurant",
  },
  {
    name: "categories/gcid:ethnographic_museum",
    displayName: "Ethnographic museum",
  },
  {
    name: "categories/gcid:european_restaurant",
    displayName: "European restaurant",
  },
  {
    name: "categories/gcid:evangelical_church",
    displayName: "Evangelical church",
  },
  {
    name: "categories/gcid:evening_dress_rental_service",
    displayName: "Evening dress rental service",
  },
  {
    name: "categories/gcid:evening_school",
    displayName: "Evening school",
  },
  {
    name: "categories/gcid:event_management_company",
    displayName: "Event management company",
  },
  {
    name: "categories/gcid:event_planner",
    displayName: "Event Planning Service",
  },
  {
    name: "categories/gcid:event_technology_service",
    displayName: "Event technology service",
  },
  {
    name: "categories/gcid:event_ticket_seller",
    displayName: "Event ticket seller",
  },
  {
    name: "categories/gcid:event_venue",
    displayName: "Events Venue",
  },
  {
    name: "categories/gcid:excavating_contractor",
    displayName: "Excavating contractor",
  },
  {
    name: "categories/gcid:executive_search_firm",
    displayName: "Executive search firm",
  },
  {
    name: "categories/gcid:executive_suite_rental_agency",
    displayName: "Executive suite rental agency",
  },
  {
    name: "categories/gcid:executor",
    displayName: "Executor",
  },
  {
    name: "categories/gcid:exhibit",
    displayName: "Exhibit",
  },
  {
    name: "categories/gcid:exhibition_and_trade_center",
    displayName: "Exhibition and trade centre",
  },
  {
    name: "categories/gcid:exhibition_planner",
    displayName: "Exhibition planner",
  },
  {
    name: "categories/gcid:exporter",
    displayName: "Exporter",
  },
  {
    name: "categories/gcid:extended_stay_hotel",
    displayName: "Extended stay hotel",
  },
  {
    name: "categories/gcid:extremadurian_restaurant",
    displayName: "Extremaduran restaurant",
  },
  {
    name: "categories/gcid:eye_care_center",
    displayName: "Eye Care Clinic",
  },
  {
    name: "categories/gcid:eyebrow_bar",
    displayName: "Eyebrow bar",
  },
  {
    name: "categories/gcid:eyelash_salon",
    displayName: "Eyelash salon",
  },
  {
    name: "categories/gcid:fabric_product_manufacturer",
    displayName: "Fabric product manufacturer",
  },
  {
    name: "categories/gcid:fabric_store",
    displayName: "Fabric Shop",
  },
  {
    name: "categories/gcid:fabric_wholesaler",
    displayName: "Fabric wholesaler",
  },
  {
    name: "categories/gcid:fabrication_engineer",
    displayName: "Fabrication Engineer",
  },
  {
    name: "categories/gcid:facial_spa",
    displayName: "Facial spa",
  },
  {
    name: "categories/gcid:factory_equipment_supplier",
    displayName: "Factory equipment supplier",
  },
  {
    name: "categories/gcid:faculty_of_arts",
    displayName: "Faculty of arts",
  },
  {
    name: "categories/gcid:faculty_of_law",
    displayName: "Faculty of law",
  },
  {
    name: "categories/gcid:faculty_of_pharmacy",
    displayName: "Faculty of pharmacy",
  },
  {
    name: "categories/gcid:faculty_of_psychology",
    displayName: "Faculty of psychology",
  },
  {
    name: "categories/gcid:faculty_of_science",
    displayName: "Faculty of science",
  },
  {
    name: "categories/gcid:faculty_of_sports",
    displayName: "Faculty of sports",
  },
  {
    name: "categories/gcid:fair_trade_organization",
    displayName: "Fair Trade Organization",
  },
  {
    name: "categories/gcid:fairground",
    displayName: "Fairground",
  },
  {
    name: "categories/gcid:falafel_restaurant",
    displayName: "Falafel restaurant",
  },
  {
    name: "categories/gcid:family_counselor",
    displayName: "Family counsellor",
  },
  {
    name: "categories/gcid:family_day_care_service",
    displayName: "Family day care service",
  },
  {
    name: "categories/gcid:family_law_attorney",
    displayName: "Family Lawyer",
  },
  {
    name: "categories/gcid:family_planning_center",
    displayName: "Family planning clinic",
  },
  {
    name: "categories/gcid:family_planning_counselor",
    displayName: "Family planning counselor",
  },
  {
    name: "categories/gcid:family_practice_physician",
    displayName: "GP",
  },
  {
    name: "categories/gcid:family_restaurant",
    displayName: "Family restaurant",
  },
  {
    name: "categories/gcid:family_service_center",
    displayName: "Family service center",
  },
  {
    name: "categories/gcid:farm",
    displayName: "Farm",
  },
  {
    name: "categories/gcid:farm_bureau",
    displayName: "Farm bureau",
  },
  {
    name: "categories/gcid:farm_equipment_repair_service",
    displayName: "Farm Equipment Repair Shop",
  },
  {
    name: "categories/gcid:farm_equipment_supplier",
    displayName: "Farm equipment supplier",
  },
  {
    name: "categories/gcid:farm_household_tour",
    displayName: "Farm household tour",
  },
  {
    name: "categories/gcid:farm_school",
    displayName: "Farm school",
  },
  {
    name: "categories/gcid:farm_shop",
    displayName: "Farm shop",
  },
  {
    name: "categories/gcid:farmers_market",
    displayName: "Farmers' market",
  },
  {
    name: "categories/gcid:farmstay",
    displayName: "Farm Stay",
  },
  {
    name: "categories/gcid:fashion_accessories_store",
    displayName: "Clothing Accessories Store",
  },
  {
    name: "categories/gcid:fashion_design_school",
    displayName: "Fashion design school",
  },
  {
    name: "categories/gcid:fashion_designer",
    displayName: "Fashion designer",
  },
  {
    name: "categories/gcid:fast_food_restaurant",
    displayName: "Fast food restaurant",
  },
  {
    name: "categories/gcid:fastener_supplier",
    displayName: "Fastener supplier",
  },
  {
    name: "categories/gcid:favela",
    displayName: "Favela",
  },
  {
    name: "categories/gcid:fax_service",
    displayName: "Fax Service Provider",
  },
  {
    name: "categories/gcid:federal_agency_for_technical_relief",
    displayName: "Federal Agency for Technical Relief",
  },
  {
    name: "categories/gcid:federal_credit_union",
    displayName: "Federal credit union",
  },
  {
    name: "categories/gcid:federal_government_office",
    displayName: "Central Government Office",
  },
  {
    name: "categories/gcid:federal_police",
    displayName: "Federal police",
  },
  {
    name: "categories/gcid:federal_reserve_bank",
    displayName: "Reserve Bank",
  },
  {
    name: "categories/gcid:feed_manufacturer",
    displayName: "Feed manufacturer",
  },
  {
    name: "categories/gcid:feed_store",
    displayName: "Animal feed shop",
  },
  {
    name: "categories/gcid:felt_boots_store",
    displayName: "Felt Boots Shop",
  },
  {
    name: "categories/gcid:fence_contractor",
    displayName: "Fence contractor",
  },
  {
    name: "categories/gcid:fence_supply_store",
    displayName: "Fence Supply Shop",
  },
  {
    name: "categories/gcid:fencing_salon",
    displayName: "Fencing salon",
  },
  {
    name: "categories/gcid:fencing_school",
    displayName: "Fencing school",
  },
  {
    name: "categories/gcid:feng_shui_consultant",
    displayName: "Feng shui consultant",
  },
  {
    name: "categories/gcid:feng_shui_shop",
    displayName: "Feng Shui Consultant",
  },
  {
    name: "categories/gcid:ferrari_dealer",
    displayName: "Ferrari dealer",
  },
  {
    name: "categories/gcid:ferris_wheel",
    displayName: "Ferris wheel",
  },
  {
    name: "categories/gcid:ferry_service",
    displayName: "Ferry Service Provider",
  },
  {
    name: "categories/gcid:fertility_clinic",
    displayName: "Fertility clinic",
  },
  {
    name: "categories/gcid:fertility_physician",
    displayName: "Fertility Doctor",
  },
  {
    name: "categories/gcid:fertilizer_supplier",
    displayName: "Fertilizer Store",
  },
  {
    name: "categories/gcid:festival",
    displayName: "Festival",
  },
  {
    name: "categories/gcid:festival_hall",
    displayName: "Festival hall",
  },
  {
    name: "categories/gcid:fiat_dealer",
    displayName: "Fiat dealer",
  },
  {
    name: "categories/gcid:fiber_optic_products_supplier",
    displayName: "Fiber Optic Products Supplier",
  },
  {
    name: "categories/gcid:fiberglass_repair_service",
    displayName: "Fibreglass Repair Service",
  },
  {
    name: "categories/gcid:fiberglass_supplier",
    displayName: "Fibreglass Supplier",
  },
  {
    name: "categories/gcid:figurine_shop",
    displayName: "Figurine shop",
  },
  {
    name: "categories/gcid:filipino_grocery_store",
    displayName: "Filipino grocery store",
  },
  {
    name: "categories/gcid:filipino_restaurant",
    displayName: "Filipino restaurant",
  },
  {
    name: "categories/gcid:film_and_photograph_library",
    displayName: "Film and photograph library",
  },
  {
    name: "categories/gcid:film_production_company",
    displayName: "Film Production Company",
  },
  {
    name: "categories/gcid:filtration_plant",
    displayName: "Filtration plant",
  },
  {
    name: "categories/gcid:finance_broker",
    displayName: "Finance broker",
  },
  {
    name: "categories/gcid:financial_audit",
    displayName: "Financial audit",
  },
  {
    name: "categories/gcid:financial_consultant",
    displayName: "Financial Advisor",
  },
  {
    name: "categories/gcid:financial_institution",
    displayName: "Financial institution",
  },

  {
    name: "categories/gcid:fine_dining_restaurant",
    displayName: "Fine dining restaurant",
  },
  {
    name: "categories/gcid:fingerprinting_service",
    displayName: "Fingerprinting Service Provider",
  },
  {
    name: "categories/gcid:finishing_materials_supplier",
    displayName: "Finishing materials supplier",
  },
  {
    name: "categories/gcid:finnish_restaurant",
    displayName: "Finnish restaurant",
  },
  {
    name: "categories/gcid:fire_alarm_supplier",
    displayName: "Fire alarm supplier",
  },
  {
    name: "categories/gcid:fire_damage_restoration_service",
    displayName: "Fire damage restoration service",
  },
  {
    name: "categories/gcid:fire_department_equipment_supplier",
    displayName: "Fire department equipment supplier",
  },
  {
    name: "categories/gcid:fire_fighters_academy",
    displayName: "Fire fighters academy",
  },
  {
    name: "categories/gcid:fire_proofing_contractor",
    displayName: "Fire Proofing Contractor",
  },
  {
    name: "categories/gcid:fire_protection_consultant",
    displayName: "Fire protection consultant",
  },
  {
    name: "categories/gcid:fire_protection_equipment_supplier",
    displayName: "Fire protection equipment supplier",
  },
  {
    name: "categories/gcid:fire_protection_service",
    displayName: "Fire protection service",
  },
  {
    name: "categories/gcid:fire_protection_system_supplier",
    displayName: "Fire protection system supplier",
  },
  {
    name: "categories/gcid:fire_station",
    displayName: "Fire station",
  },
  {
    name: "categories/gcid:firearms_academy",
    displayName: "Firearms academy",
  },
  {
    name: "categories/gcid:fireplace_manufacturer",
    displayName: "Fireplace Manufacturer",
  },
  {
    name: "categories/gcid:fireplace_store",
    displayName: "Fireplace shop",
  },
  {
    name: "categories/gcid:firewood_supplier",
    displayName: "Firewood supplier",
  },
  {
    name: "categories/gcid:fireworks_store",
    displayName: "Fireworks shop",
  },
  {
    name: "categories/gcid:fireworks_supplier",
    displayName: "Fireworks Supplier",
  },
  {
    name: "categories/gcid:first_aid",
    displayName: "First aid station",
  },
  {
    name: "categories/gcid:fish_and_chips_restaurant",
    displayName: "Fish & chips shop",
  },
  {
    name: "categories/gcid:fish_and_chips_takeaway",
    displayName: "Fish and chips takeaway",
  },
  {
    name: "categories/gcid:fish_farm",
    displayName: "Fishery",
  },
  {
    name: "categories/gcid:fish_processing",
    displayName: "Fish processing",
  },
  {
    name: "categories/gcid:fish_restaurant",
    displayName: "Fish restaurant",
  },
  {
    name: "categories/gcid:fish_spa",
    displayName: "Fish spa",
  },
  {
    name: "categories/gcid:fish_store",
    displayName: "Fishmonger",
  },
  {
    name: "categories/gcid:fishing_camp",
    displayName: "Fishing camp",
  },
  {
    name: "categories/gcid:fishing_charter",
    displayName: "Fishing charter",
  },
  {
    name: "categories/gcid:fishing_club",
    displayName: "Fishing club",
  },
  {
    name: "categories/gcid:fishing_pier",
    displayName: "Fishing Pier",
  },
  {
    name: "categories/gcid:fishing_pond",
    displayName: "Fishing pond",
  },
  {
    name: "categories/gcid:fishing_store",
    displayName: "Fishing shop",
  },
  {
    name: "categories/gcid:fitness_center",
    displayName: "Fitness centre",
  },
  {
    name: "categories/gcid:fitness_equipment_store",
    displayName: "Exercise Equipment Shop",
  },
  {
    name: "categories/gcid:fitness_equipment_wholesaler",
    displayName: "Fitness Equipment Wholesaler",
  },
  {
    name: "categories/gcid:fitted_furniture_supplier",
    displayName: "Fitted furniture supplier",
  },
  {
    name: "categories/gcid:fixed_base_operator",
    displayName: "Fixed-base operator",
  },
  {
    name: "categories/gcid:flag_store",
    displayName: "Flag Shop",
  },
  {
    name: "categories/gcid:flamenco_dance_store",
    displayName: "Flamenco dance store",
  },
  {
    name: "categories/gcid:flamenco_school",
    displayName: "Flamenco school",
  },
  {
    name: "categories/gcid:flamenco_theater",
    displayName: "Flamenco Theatre",
  },
  {
    name: "categories/gcid:flavours_fragrances_and_aroma_supplier",
    displayName: "Flavours, Fragrances & Aroma Supplier",
  },
  {
    name: "categories/gcid:flea_market",
    displayName: "Fleamarket",
  },
  {
    name: "categories/gcid:flight_school",
    displayName: "Flight school",
  },
  {
    name: "categories/gcid:floating_market",
    displayName: "Floating market",
  },
  {
    name: "categories/gcid:floor_refinishing_service",
    displayName: "Floor refinishing service",
  },
  {
    name: "categories/gcid:floor_sanding_and_polishing_service",
    displayName: "Floor sanding and polishing service",
  },
  {
    name: "categories/gcid:flooring_contractor",
    displayName: "Flooring contractor",
  },
  {
    name: "categories/gcid:flooring_store",
    displayName: "Flooring Shop",
  },
  {
    name: "categories/gcid:floridian_restaurant",
    displayName: "Floridian restaurant",
  },
  {
    name: "categories/gcid:florist",
    displayName: "Florist",
  },
  {
    name: "categories/gcid:flour_mill",
    displayName: "Flour mill",
  },
  {
    name: "categories/gcid:flower_delivery",
    displayName: "Flower delivery",
  },
  {
    name: "categories/gcid:flower_designer",
    displayName: "Flower designer",
  },
  {
    name: "categories/gcid:flower_market",
    displayName: "Flower market",
  },
  {
    name: "categories/gcid:fmcg_goods_wholesaler",
    displayName: "FMCG Goods Wholesaler",
  },
  {
    name: "categories/gcid:fmcg_manufacturer",
    displayName: "FMCG Manufacturer",
  },
  {
    name: "categories/gcid:foam_rubber_producer",
    displayName: "Foam rubber producer",
  },
  {
    name: "categories/gcid:foam_rubber_supplier",
    displayName: "Foam rubber supplier",
  },
  {
    name: "categories/gcid:folk_high_school",
    displayName: "Folk high school",
  },
  {
    name: "categories/gcid:fondue_restaurant",
    displayName: "Fondue restaurant",
  },
  {
    name: "categories/gcid:food_and_beverage_consultant",
    displayName: "Food & Beverage Consultant",
  },
  {
    name: "categories/gcid:food_and_beverage_exporter",
    displayName: "Food & Beverage Exporter",
  },
  {
    name: "categories/gcid:food_bank",
    displayName: "Foodbank",
  },
  {
    name: "categories/gcid:food_broker",
    displayName: "Food broker",
  },
  {
    name: "categories/gcid:food_court",
    displayName: "Food court",
  },
  {
    name: "categories/gcid:food_machinery_supplier",
    displayName: "Food machinery supplier",
  },
  {
    name: "categories/gcid:food_manufacturer",
    displayName: "Food Manufacturer",
  },
  {
    name: "categories/gcid:food_manufacturing_supply",
    displayName: "Food manufacturing supply",
  },
  {
    name: "categories/gcid:food_processing_company",
    displayName: "Food Processing Company",
  },
  {
    name: "categories/gcid:food_processing_equipment",
    displayName: "Food processing equipment",
  },
  {
    name: "categories/gcid:food_producer",
    displayName: "Food producer",
  },
  {
    name: "categories/gcid:food_products_supplier",
    displayName: "Food products supplier",
  },
  {
    name: "categories/gcid:food_seasoning_manufacturer",
    displayName: "Food seasoning manufacturer",
  },
  {
    name: "categories/gcid:foot_bath",
    displayName: "Foot bath",
  },
  {
    name: "categories/gcid:foot_care",
    displayName: "Foot care",
  },
  {
    name: "categories/gcid:foot_massage_parlor",
    displayName: "Foot Massage Parlour",
  },
  {
    name: "categories/gcid:football_club",
    displayName: "Football Club",
  },
  {
    name: "categories/gcid:football_field",
    displayName: "Football pitch",
  },
  {
    name: "categories/gcid:ford_dealer",
    displayName: "Ford dealer",
  },
  {
    name: "categories/gcid:foreclosure_service",
    displayName: "Foreclosure service",
  },
  {
    name: "categories/gcid:foreign_consulate",
    displayName: "Foreign consulate",
  },
  {
    name: "categories/gcid:foreign_exchange_students_organization",
    displayName: "Foreign Exchange Students Organization",
  },
  {
    name: "categories/gcid:foreign_languages_program_school",
    displayName: "Foreign languages program school",
  },
  {
    name: "categories/gcid:foreign_trade_consultant",
    displayName: "Foreign Trade Consultant",
  },
  {
    name: "categories/gcid:foreman_builders_association",
    displayName: "Foreman builders association",
  },
  {
    name: "categories/gcid:forensic_consultant",
    displayName: "Forensic Consultant",
  },
  {
    name: "categories/gcid:forestry_service",
    displayName: "Forestry service",
  },
  {
    name: "categories/gcid:forklift_dealer",
    displayName: "Forklift dealer",
  },
  {
    name: "categories/gcid:forklift_rental_service",
    displayName: "Forklift rental service",
  },
  {
    name: "categories/gcid:formal_clothing_store",
    displayName: "Formal Clothing Store",
  },
  {
    name: "categories/gcid:fortress",
    displayName: "Fortress",
  },
  {
    name: "categories/gcid:fortune_telling_services",
    displayName: "Fortune telling services",
  },
  {
    name: "categories/gcid:foster_care_service",
    displayName: "Foster care service",
  },
  {
    name: "categories/gcid:foundation",
    displayName: "Foundation",
  },
  {
    name: "categories/gcid:foundry",
    displayName: "Foundry",
  },
  {
    name: "categories/gcid:fountain_contractor",
    displayName: "Fountain contractor",
  },
  {
    name: "categories/gcid:foursquare_church",
    displayName: "Foursquare church",
  },
  {
    name: "categories/gcid:franconian_restaurant",
    displayName: "Franconian restaurant",
  },
  {
    name: "categories/gcid:fraternal_organization",
    displayName: "Fraternal organization",
  },
  {
    name: "categories/gcid:free_clinic",
    displayName: "Free clinic",
  },
  {
    name: "categories/gcid:free_parking_lot",
    displayName: "Free Car Park",
  },
  {
    name: "categories/gcid:freestyle_wrestling",
    displayName: "Freestyle wrestling",
  },
  {
    name: "categories/gcid:freight_forwarding_service",
    displayName: "Freight Forwarding Agency",
  },
  {
    name: "categories/gcid:french_language_school",
    displayName: "French language school",
  },
  {
    name: "categories/gcid:french_restaurant",
    displayName: "French restaurant",
  },
  {
    name: "categories/gcid:french_steakhouse_restaurant",
    displayName: "French steak restaurant",
  },
  {
    name: "categories/gcid:fresh_food_market",
    displayName: "Fresh food market",
  },
  {
    name: "categories/gcid:fried_chicken_takeaway",
    displayName: "Fried chicken takeaway",
  },
  {
    name: "categories/gcid:friends_church",
    displayName: "Friends church",
  },
  {
    name: "categories/gcid:frituur",
    displayName: "Frituur",
  },
  {
    name: "categories/gcid:frozen_dessert_supplier",
    displayName: "Frozen dessert supplier",
  },
  {
    name: "categories/gcid:frozen_food_manufacturer",
    displayName: "Frozen food manufacturer",
  },
  {
    name: "categories/gcid:frozen_food_store",
    displayName: "Frozen food store",
  },
  {
    name: "categories/gcid:frozen_yogurt_shop",
    displayName: "Frozen Yoghurt Shop",
  },
  {
    name: "categories/gcid:fruit_and_vegetable_processing",
    displayName: "Fruit and vegetable processing",
  },
  {
    name: "categories/gcid:fruit_and_vegetable_store",
    displayName: "Fruit and Vegetable Shop",
  },
  {
    name: "categories/gcid:fruit_and_vegetable_wholesaler",
    displayName: "Fruit and vegetable wholesaler",
  },
  {
    name: "categories/gcid:fruit_parlor",
    displayName: "Fruit Parlour",
  },
  {
    name: "categories/gcid:fruit_wholesaler",
    displayName: "Fruit wholesaler",
  },
  {
    name: "categories/gcid:fruits_wholesaler",
    displayName: "Fruits Wholesaler",
  },
  {
    name: "categories/gcid:fu_jian_restaurant",
    displayName: "Fujian restaurant",
  },
  {
    name: "categories/gcid:fuel_supplier",
    displayName: "Fuel supplier",
  },
  {
    name: "categories/gcid:fugu_restaurant",
    displayName: "Fugu restaurant",
  },
  {
    name: "categories/gcid:full_dress_rental_service",
    displayName: "Full dress rental service",
  },
  {
    name: "categories/gcid:full_gospel_church",
    displayName: "Full Gospel church",
  },
  {
    name: "categories/gcid:function_room_facility",
    displayName: "Function room facility",
  },
  {
    name: "categories/gcid:fund_management_company",
    displayName: "Fund management company",
  },
  {
    name: "categories/gcid:funeral_celebrant_service",
    displayName: "Funeral celebrant service",
  },
  {
    name: "categories/gcid:funeral_director",
    displayName: "Funeral director",
  },
  {
    name: "categories/gcid:funeral_home",
    displayName: "Funeral home",
  },
  {
    name: "categories/gcid:fur_coat_shop",
    displayName: "Fur coat shop",
  },
  {
    name: "categories/gcid:fur_manufacturer",
    displayName: "Fur manufacturer",
  },
  {
    name: "categories/gcid:fur_service",
    displayName: "Fur service",
  },
  {
    name: "categories/gcid:furnace_parts_supplier",
    displayName: "Furnace parts supplier",
  },
  {
    name: "categories/gcid:furnace_repair_service",
    displayName: "Furnace repair service",
  },
  {
    name: "categories/gcid:furnace_store",
    displayName: "Furnace Shop",
  },
  {
    name: "categories/gcid:furnished_apartment_building",
    displayName: "Furnished apartment building",
  },
  {
    name: "categories/gcid:furniture_accessories",
    displayName: "Furniture accessories",
  },
  {
    name: "categories/gcid:furniture_accessories_supplier",
    displayName: "Furniture accessories supplier",
  },
  {
    name: "categories/gcid:furniture_maker",
    displayName: "Furniture maker",
  },
  {
    name: "categories/gcid:furniture_manufacturer",
    displayName: "Furniture Manufacturer",
  },
  {
    name: "categories/gcid:furniture_rental_service",
    displayName: "Furniture Rental Store",
  },
  {
    name: "categories/gcid:furniture_repair_shop",
    displayName: "Furniture repair shop",
  },
  {
    name: "categories/gcid:furniture_store",
    displayName: "Home Furniture Shop",
  },
  {
    name: "categories/gcid:furniture_wholesaler",
    displayName: "Furniture wholesaler",
  },
  {
    name: "categories/gcid:fusion_restaurant",
    displayName: "Fusion restaurant",
  },
  {
    name: "categories/gcid:futon_store",
    displayName: "Futon store",
  },
  {
    name: "categories/gcid:futsal_field",
    displayName: "Futsal court",
  },
  {
    name: "categories/gcid:galician_restaurant",
    displayName: "Galician restaurant",
  },
  {
    name: "categories/gcid:gambling_house",
    displayName: "Gambling house",
  },
  {
    name: "categories/gcid:gambling_instructor",
    displayName: "Gambling instructor",
  },
  {
    name: "categories/gcid:game_store",
    displayName: "Game Shop",
  },
  {
    name: "categories/gcid:garage_builder",
    displayName: "Garage builder",
  },
  {
    name: "categories/gcid:garage_door_supplier",
    displayName: "Garage door supplier",
  },
  {
    name: "categories/gcid:garbage_collection_service",
    displayName: "Waste Collection Service",
  },
  {
    name: "categories/gcid:garbage_dump",
    displayName: "Household waste recycling centre",
  },
  {
    name: "categories/gcid:garbage_dump_service",
    displayName: "Rubbish Dump Service",
  },
  {
    name: "categories/gcid:garden",
    displayName: "Garden",
  },
  {
    name: "categories/gcid:garden_building_retail",
    displayName: "Garden building supplier",
  },
  {
    name: "categories/gcid:garden_center",
    displayName: "Garden centre",
  },
  {
    name: "categories/gcid:garden_furniture_store",
    displayName: "Garden Furniture Store",
  },
  {
    name: "categories/gcid:garden_machinery",
    displayName: "Garden machinery supplier",
  },
  {
    name: "categories/gcid:gardener",
    displayName: "Gardener",
  },
  {
    name: "categories/gcid:garment_exporter",
    displayName: "Garment Exporter",
  },
  {
    name: "categories/gcid:gas_company",
    displayName: "Gas Agency",
  },
  {
    name: "categories/gcid:gas_cylinders_supplier",
    displayName: "Gas cylinders supplier",
  },
  {
    name: "categories/gcid:gas_engineer",
    displayName: "Gas engineer",
  },
  {
    name: "categories/gcid:gas_installation_service",
    displayName: "Gas installation service",
  },
  {
    name: "categories/gcid:gas_logs_supplier",
    displayName: "Gas logs supplier",
  },
  {
    name: "categories/gcid:gas_shop",
    displayName: "Gas shop",
  },
  {
    name: "categories/gcid:gas_station",
    displayName: "Petrol Pump",
  },
  {
    name: "categories/gcid:gasfitter",
    displayName: "Gasfitter",
  },
  {
    name: "categories/gcid:gasket_manufacturer",
    displayName: "Gasket Manufacturer",
  },
  {
    name: "categories/gcid:gastroenterologist",
    displayName: "Gastroenterologist",
  },
  {
    name: "categories/gcid:gastrointestinal_surgeon",
    displayName: "Gastrointestinal surgeon",
  },
  {
    name: "categories/gcid:gastropub",
    displayName: "Gastropub",
  },
  {
    name: "categories/gcid:gated_community",
    displayName: "Gated community",
  },
  {
    name: "categories/gcid:gay_and_lesbian_organization",
    displayName: "Gay & Lesbian Organisation",
  },
  {
    name: "categories/gcid:gay_bar",
    displayName: "Gay bar",
  },
  {
    name: "categories/gcid:gay_night_club",
    displayName: "Gay night club",
  },
  {
    name: "categories/gcid:gay_sauna",
    displayName: "Gay Sauna",
  },
  {
    name: "categories/gcid:gazebo_builder",
    displayName: "Gazebo builder",
  },
  {
    name: "categories/gcid:gemologist",
    displayName: "Gemologist",
  },
  {
    name: "categories/gcid:genealogist",
    displayName: "Genealogist",
  },
  {
    name: "categories/gcid:general_contractor",
    displayName: "General Contractor",
  },
  {
    name: "categories/gcid:general_education_school",
    displayName: "General education school",
  },
  {
    name: "categories/gcid:general_hospital",
    displayName: "General hospital",
  },
  {
    name: "categories/gcid:general_practice_attorney",
    displayName: "General Practice Lawyer",
  },
  {
    name: "categories/gcid:general_practitioner",
    displayName: "General practitioner",
  },
  {
    name: "categories/gcid:general_register_office",
    displayName: "General register office",
  },
  {
    name: "categories/gcid:general_store",
    displayName: "General Store",
  },
  {
    name: "categories/gcid:generator_shop",
    displayName: "Generator Shop",
  },
  {
    name: "categories/gcid:genesis_dealer",
    displayName: "Genesis dealer",
  },
  {
    name: "categories/gcid:geography_and_history_faculty",
    displayName: "Geography and history faculty",
  },
  {
    name: "categories/gcid:geological_research_company",
    displayName: "Geological research company",
  },
  {
    name: "categories/gcid:geological_service",
    displayName: "Geological service",
  },
  {
    name: "categories/gcid:geologist",
    displayName: "Geologist",
  },
  {
    name: "categories/gcid:georgian_restaurant",
    displayName: "Georgian restaurant",
  },
  {
    name: "categories/gcid:geotechnical_engineer",
    displayName: "Geotechnical Engineer",
  },
  {
    name: "categories/gcid:geriatrician",
    displayName: "Geriatrician",
  },
  {
    name: "categories/gcid:german_language_school",
    displayName: "German language school",
  },
  {
    name: "categories/gcid:german_restaurant",
    displayName: "German restaurant",
  },
  {
    name: "categories/gcid:ghost_town",
    displayName: "Ghost town",
  },
  {
    name: "categories/gcid:gift_basket_store",
    displayName: "Gift basket shop",
  },
  {
    name: "categories/gcid:gift_shop",
    displayName: "Gift shop",
  },
  {
    name: "categories/gcid:gift_wrap_store",
    displayName: "Wrapping Paper Shop",
  },
  {
    name: "categories/gcid:girl_bar",
    displayName: "Girl bar",
  },
  {
    name: "categories/gcid:girls_hostel",
    displayName: "Girl's Hostel",
  },
  {
    name: "categories/gcid:girls_secondary_school",
    displayName: "Girls' Secondary School",
  },
  {
    name: "categories/gcid:glass_and_mirror_shop",
    displayName: "Glass & mirror shop",
  },
  {
    name: "categories/gcid:glass_block_supplier",
    displayName: "Glass Block Supplier",
  },
  {
    name: "categories/gcid:glass_blower",
    displayName: "Glass blower",
  },
  {
    name: "categories/gcid:glass_cutting_service",
    displayName: "Glass cutting service",
  },
  {
    name: "categories/gcid:glass_engraving",
    displayName: "Glass engraver",
  },
  {
    name: "categories/gcid:glass_etching_service",
    displayName: "Glass etching service",
  },
  {
    name: "categories/gcid:glass_industry",
    displayName: "Glass industry",
  },
  {
    name: "categories/gcid:glass_manufacturer",
    displayName: "Glass manufacturer",
  },
  {
    name: "categories/gcid:glass_merchant",
    displayName: "Glass merchant",
  },
  {
    name: "categories/gcid:glass_repair_service",
    displayName: "Glass repair service",
  },
  {
    name: "categories/gcid:glass_shop",
    displayName: "Glass shop",
  },
  {
    name: "categories/gcid:glasses_repair_service",
    displayName: "Glasses repair service",
  },
  {
    name: "categories/gcid:glassware_manufacturer",
    displayName: "Glassware manufacturer",
  },
  {
    name: "categories/gcid:glassware_store",
    displayName: "Glassware Shop",
  },
  {
    name: "categories/gcid:glassware_wholesaler",
    displayName: "Glassware wholesaler",
  },
  {
    name: "categories/gcid:glazier",
    displayName: "Glazier",
  },
  {
    name: "categories/gcid:gluten_free_restaurant",
    displayName: "Gluten-free restaurant",
  },
  {
    name: "categories/gcid:gmc_dealer",
    displayName: "GMC dealer",
  },
  {
    name: "categories/gcid:go_kart_track",
    displayName: "Go-Cart Track",
  },
  {
    name: "categories/gcid:goan_restaurant",
    displayName: "Goan restaurant",
  },
  {
    name: "categories/gcid:gold_dealer",
    displayName: "Gold dealer",
  },
  {
    name: "categories/gcid:gold_mining_company",
    displayName: "Gold mining company",
  },
  {
    name: "categories/gcid:goldfish_store",
    displayName: "Goldfish store",
  },
  {
    name: "categories/gcid:goldsmith",
    displayName: "Goldsmith",
  },
  {
    name: "categories/gcid:golf_cart_dealer",
    displayName: "Golf cart dealer",
  },
  {
    name: "categories/gcid:golf_club",
    displayName: "Golf club",
  },
  {
    name: "categories/gcid:golf_course",
    displayName: "Golf course",
  },
  {
    name: "categories/gcid:golf_course_builder",
    displayName: "Golf course builder",
  },
  {
    name: "categories/gcid:golf_driving_range",
    displayName: "Golf driving range",
  },
  {
    name: "categories/gcid:golf_instructor",
    displayName: "Golf instructor",
  },
  {
    name: "categories/gcid:golf_shop",
    displayName: "Golf shop",
  },
  {
    name: "categories/gcid:gospel_church",
    displayName: "Gospel church",
  },
  {
    name: "categories/gcid:gourmet_grocery_store",
    displayName: "Gourmet Grocery Shop",
  },
  {
    name: "categories/gcid:government_college",
    displayName: "Government College",
  },
  {
    name: "categories/gcid:government_economic_program",
    displayName: "Government economic program",
  },
  {
    name: "categories/gcid:government_hospital",
    displayName: "Government hospital",
  },
  {
    name: "categories/gcid:government_office",
    displayName: "Government office",
  },
  {
    name: "categories/gcid:government_ration_shop",
    displayName: "Government ration shop",
  },
  {
    name: "categories/gcid:government_school",
    displayName: "Government School",
  },
  {
    name: "categories/gcid:gps_supplier",
    displayName: "GPS supplier",
  },
  {
    name: "categories/gcid:graduate_school",
    displayName: "Graduate University",
  },
  {
    name: "categories/gcid:graffiti_removal_service",
    displayName: "Graffiti removal service",
  },
  {
    name: "categories/gcid:grain_elevator",
    displayName: "Grain elevator",
  },
  {
    name: "categories/gcid:grammar_school",
    displayName: "Grammar school",
  },
  {
    name: "categories/gcid:granite_supplier",
    displayName: "Granite supplier",
  },
  {
    name: "categories/gcid:graphic_designer",
    displayName: "Graphic designer",
  },
  {
    name: "categories/gcid:gravel_pit",
    displayName: "Gravel pit",
  },
  {
    name: "categories/gcid:gravel_plant",
    displayName: "Gravel plant",
  },
  {
    name: "categories/gcid:greco_roman_wrestling",
    displayName: "Greco-Roman wrestling",
  },
  {
    name: "categories/gcid:greek_orthodox_church",
    displayName: "Greek Orthodox church",
  },
  {
    name: "categories/gcid:greek_restaurant",
    displayName: "Greek restaurant",
  },
  {
    name: "categories/gcid:green_energy_supplier",
    displayName: "Green energy supplier",
  },
  {
    name: "categories/gcid:green_grocers",
    displayName: "Greengrocer",
  },
  {
    name: "categories/gcid:greenhouse",
    displayName: "Greenhouse",
  },
  {
    name: "categories/gcid:greeting_card_shop",
    displayName: "Greetings Card Shop",
  },
  {
    name: "categories/gcid:greyhound_stadium",
    displayName: "Greyhound Stadium",
  },
  {
    name: "categories/gcid:grill_store",
    displayName: "Barbecue Shop",
  },
  {
    name: "categories/gcid:grocery_delivery_service",
    displayName: "Grocery delivery service",
  },

  {
    name: "categories/gcid:ground_self_defense_force",
    displayName: "Ground self defense force",
  },
  {
    name: "categories/gcid:group_home",
    displayName: "Group home",
  },
  {
    name: "categories/gcid:guardia_civil",
    displayName: "Guardia Civil",
  },
  {
    name: "categories/gcid:guardia_di_finanza_police",
    displayName: "Guardia Di Finanza Police",
  },
  {
    name: "categories/gcid:guatemalan_restaurant",
    displayName: "Guatemalan restaurant",
  },
  {
    name: "categories/gcid:guest_house",
    displayName: "Guest house",
  },
  {
    name: "categories/gcid:gui_zhou_restaurant",
    displayName: "Guizhou restaurant",
  },
  {
    name: "categories/gcid:guitar_instructor",
    displayName: "Guitar instructor",
  },
  {
    name: "categories/gcid:guitar_store",
    displayName: "Guitar Shop",
  },
  {
    name: "categories/gcid:gujarati_restaurant",
    displayName: "Gujarati restaurant",
  },
  {
    name: "categories/gcid:gun_club",
    displayName: "Gun club",
  },
  {
    name: "categories/gcid:gun_shop",
    displayName: "Gun shop",
  },
  {
    name: "categories/gcid:guts_barbecue_restaurant",
    displayName: "Offal barbecue restaurant",
  },
  {
    name: "categories/gcid:gutter_cleaning_service",
    displayName: "Gutter Cleaning Service",
  },
  {
    name: "categories/gcid:gym",
    displayName: "Gym",
  },
  {
    name: "categories/gcid:gymnasium_school",
    displayName: "Gymnasium school",
  },
  {
    name: "categories/gcid:gymnastics_center",
    displayName: "Gymnastics academy",
  },
  {
    name: "categories/gcid:gymnastics_club",
    displayName: "Gymnastics club",
  },
  {
    name: "categories/gcid:gynecologist",
    displayName: "Obstetrician-gynecologist",
  },
  {
    name: "categories/gcid:gynecologist_only",
    displayName: "Gynecologist",
  },
  {
    name: "categories/gcid:gypsum_product_supplier",
    displayName: "Gypsum Product Supplier",
  },
  {
    name: "categories/gcid:gyro_restaurant",
    displayName: "Gyro restaurant",
  },
  {
    name: "categories/gcid:haberdashery",
    displayName: "Haberdashery",
  },
  {
    name: "categories/gcid:hair_extension_technician",
    displayName: "Hair extension technician",
  },
  {
    name: "categories/gcid:hair_extensions_supplier",
    displayName: "Hair extensions supplier",
  },
  {
    name: "categories/gcid:hair_removal_service",
    displayName: "Hair removal service",
  },
  {
    name: "categories/gcid:hair_replacement_service",
    displayName: "Hair replacement service",
  },
  {
    name: "categories/gcid:hair_salon",
    displayName: "Hairdresser",
  },
  {
    name: "categories/gcid:hair_transplantation_clinic",
    displayName: "Hair transplantation clinic",
  },
  {
    name: "categories/gcid:haitian_restaurant",
    displayName: "Haitian restaurant",
  },
  {
    name: "categories/gcid:hakka_restaurant",
    displayName: "Hakka restaurant",
  },
  {
    name: "categories/gcid:halal_restaurant",
    displayName: "Halal restaurant",
  },
  {
    name: "categories/gcid:haleem_restaurant",
    displayName: "Haleem restaurant",
  },
  {
    name: "categories/gcid:halfway_house",
    displayName: "Halfway house",
  },
  {
    name: "categories/gcid:ham_shop",
    displayName: "Delicatessen",
  },
  {
    name: "categories/gcid:hamburger_restaurant",
    displayName: "Hamburger restaurant",
  },
  {
    name: "categories/gcid:hammam",
    displayName: "Hammam",
  },
  {
    name: "categories/gcid:hand_surgeon",
    displayName: "Hand surgeon",
  },
  {
    name: "categories/gcid:handbags_shop",
    displayName: "Handbags Shop",
  },
  {
    name: "categories/gcid:handball_club",
    displayName: "Handball club",
  },
  {
    name: "categories/gcid:handball_court",
    displayName: "Handball court",
  },
  {
    name: "categories/gcid:handicapped_transportation_service",
    displayName: "Disability Transportation Service",
  },
  {
    name: "categories/gcid:handicraft",
    displayName: "Handicraft",
  },
  {
    name: "categories/gcid:handicraft_exporter",
    displayName: "Handicraft Exporter",
  },
  {
    name: "categories/gcid:handicraft_fair",
    displayName: "Handicraft fair",
  },
  {
    name: "categories/gcid:handicraft_museum",
    displayName: "Handicraft museum",
  },
  {
    name: "categories/gcid:handicraft_school",
    displayName: "Handicraft school",
  },
  {
    name: "categories/gcid:handicrafts_wholesaler",
    displayName: "Handicrafts Wholesaler",
  },
  {
    name: "categories/gcid:handyman",
    displayName: "Handyman/Handywoman/Handyperson",
  },
  {
    name: "categories/gcid:hang_gliding_center",
    displayName: "Hang Gliding Center",
  },
  {
    name: "categories/gcid:hardware_store",
    displayName: "Hardware Shop",
  },
  {
    name: "categories/gcid:hardware_training_institute",
    displayName: "Hardware Training Institute",
  },
  {
    name: "categories/gcid:harley_davidson_dealer",
    displayName: "Harley-Davidson dealer",
  },
  {
    name: "categories/gcid:hat_shop",
    displayName: "Hat shop",
  },
  {
    name: "categories/gcid:haunted_house",
    displayName: "Haunted house",
  },
  {
    name: "categories/gcid:hauptschule",
    displayName: "Hauptschule (lower-tier secondary school)",
  },
  {
    name: "categories/gcid:haute_couture_fashion_house",
    displayName: "Haute couture fashion house",
  },
  {
    name: "categories/gcid:haute_french_restaurant",
    displayName: "French haute cuisine restaurant",
  },
  {
    name: "categories/gcid:hawaiian_goods_store",
    displayName: "Hawaiian Goods Shop",
  },
  {
    name: "categories/gcid:hawaiian_restaurant",
    displayName: "Hawaiian restaurant",
  },
  {
    name: "categories/gcid:hawker_centre",
    displayName: "Hawker Centre",
  },
  {
    name: "categories/gcid:hawker_stall",
    displayName: "Hawker Stall",
  },
  {
    name: "categories/gcid:hay_supplier",
    displayName: "Hay supplier",
  },
  {
    name: "categories/gcid:head_start_center",
    displayName: "Head Start Centre",
  },
  {
    name: "categories/gcid:health_and_beauty_shop",
    displayName: "Health and beauty shop",
  },
  {
    name: "categories/gcid:health_consultant",
    displayName: "Health consultant",
  },
  {
    name: "categories/gcid:health_counselor",
    displayName: "Health counselor",
  },
  {
    name: "categories/gcid:health_food_restaurant",
    displayName: "Health food restaurant",
  },
  {
    name: "categories/gcid:health_food_store",
    displayName: "Health food shop",
  },
  {
    name: "categories/gcid:health_insurance_agency",
    displayName: "Health insurance agency",
  },
  {
    name: "categories/gcid:health_resort",
    displayName: "Health resort",
  },
  {
    name: "categories/gcid:health_spa",
    displayName: "Health spa",
  },
  {
    name: "categories/gcid:hearing_aid_repair_service",
    displayName: "Hearing aid repair service",
  },
  {
    name: "categories/gcid:hearing_aid_store",
    displayName: "Hearing Aid Shop",
  },
  {
    name: "categories/gcid:heart_hospital",
    displayName: "Heart hospital",
  },
  {
    name: "categories/gcid:heating_contractor",
    displayName: "Central Heating Service",
  },
  {
    name: "categories/gcid:heating_equipment_supplier",
    displayName: "Heating equipment supplier",
  },
  {
    name: "categories/gcid:heating_oil_supplier",
    displayName: "Heating oil supplier",
  },
  {
    name: "categories/gcid:height_works",
    displayName: "Height works",
  },
  {
    name: "categories/gcid:helicopter_charter",
    displayName: "Helicopter Charter Rental & Leasing",
  },
  {
    name: "categories/gcid:helicopter_tour_agency",
    displayName: "Helicopter tour agency",
  },
  {
    name: "categories/gcid:heliport",
    displayName: "Heliport",
  },
  {
    name: "categories/gcid:helium_gas_supplier",
    displayName: "Helium gas supplier",
  },
  {
    name: "categories/gcid:helmet_shop",
    displayName: "Helmet Shop",
  },
  {
    name: "categories/gcid:helpline",
    displayName: "Helpline",
  },
  {
    name: "categories/gcid:hematologist",
    displayName: "Haematologist",
  },
  {
    name: "categories/gcid:hepatologist",
    displayName: "Hepatologist",
  },
  {
    name: "categories/gcid:herb_shop",
    displayName: "Herb shop",
  },
  {
    name: "categories/gcid:herbal_medicine_store",
    displayName: "Herbal Medicine Shop",
  },
  {
    name: "categories/gcid:herbalist",
    displayName: "Herbalist",
  },
  {
    name: "categories/gcid:heritage_building",
    displayName: "Heritage Building",
  },
  {
    name: "categories/gcid:heritage_museum",
    displayName: "Heritage museum",
  },
  {
    name: "categories/gcid:heritage_preservation",
    displayName: "Heritage preservation",
  },
  {
    name: "categories/gcid:heritage_railroad",
    displayName: "Heritage railway",
  },
  {
    name: "categories/gcid:high_ropes_course",
    displayName: "High ropes course",
  },
  {
    name: "categories/gcid:high_school",
    displayName: "High school",
  },
  {
    name: "categories/gcid:higher_secondary_school",
    displayName: "Higher Secondary School",
  },
  {
    name: "categories/gcid:highway_patrol",
    displayName: "Highway patrol",
  },
  {
    name: "categories/gcid:hiking_area",
    displayName: "Hiking area",
  },
  {
    name: "categories/gcid:hill_station",
    displayName: "Hill Station",
  },
  {
    name: "categories/gcid:hindu_priest",
    displayName: "Pujari",
  },
  {
    name: "categories/gcid:hindu_temple",
    displayName: "Hindu temple",
  },
  {
    name: "categories/gcid:hip_hop_dance_class",
    displayName: "Hip Hop Dance Class",
  },
  {
    name: "categories/gcid:hispanic_church",
    displayName: "Hispanic church",
  },
  {
    name: "categories/gcid:historical_landmark",
    displayName: "Historical landmark",
  },
  {
    name: "categories/gcid:historical_place_museum",
    displayName: "Historical place museum",
  },
  {
    name: "categories/gcid:historical_society",
    displayName: "Historical society",
  },
  {
    name: "categories/gcid:history_museum",
    displayName: "History museum",
  },
  {
    name: "categories/gcid:hiv_testing_center",
    displayName: "HIV testing center",
  },
  {
    name: "categories/gcid:hoagie_restaurant",
    displayName: "Hoagie restaurant",
  },
  {
    name: "categories/gcid:hobby_store",
    displayName: "Hobby shop",
  },
  {
    name: "categories/gcid:hockey_club",
    displayName: "Hockey club",
  },
  {
    name: "categories/gcid:hockey_field",
    displayName: "Hockey Pitch",
  },
  {
    name: "categories/gcid:hockey_rink",
    displayName: "Hockey Rink",
  },
  {
    name: "categories/gcid:hockey_supply_store",
    displayName: "Hockey Supply Shop",
  },
  {
    name: "categories/gcid:holding_company",
    displayName: "Holding company",
  },
  {
    name: "categories/gcid:holiday_apartment_rental",
    displayName: "Holiday apartment rental",
  },
  {
    name: "categories/gcid:holiday_home",
    displayName: "Holiday Home",
  },
  {
    name: "categories/gcid:holistic_medicine_practitioner",
    displayName: "Holistic medicine practitioner",
  },
  {
    name: "categories/gcid:home_automation_company",
    displayName: "Home Automation Company",
  },
  {
    name: "categories/gcid:home_builder",
    displayName: "Home builder",
  },
  {
    name: "categories/gcid:home_cinema_installation",
    displayName: "Home cinema installation",
  },
  {
    name: "categories/gcid:home_goods_store",
    displayName: "Homewares Shop",
  },
  {
    name: "categories/gcid:home_hairdresser",
    displayName: "Home hairdresser",
  },
  {
    name: "categories/gcid:home_health_care_service",
    displayName: "Home Care Service",
  },
  {
    name: "categories/gcid:home_help",
    displayName: "Home help",
  },
  {
    name: "categories/gcid:home_help_service_agency",
    displayName: "Home help service agency",
  },
  {
    name: "categories/gcid:home_improvement_store",
    displayName: "Home improvement shop",
  },

  {
    name: "categories/gcid:home_insurance_agency",
    displayName: "Home Insurance Agency",
  },
  {
    name: "categories/gcid:home_theater_store",
    displayName: "Home Theatre Shop",
  },
  {
    name: "categories/gcid:homekill_service",
    displayName: "Homekill Service",
  },
  {
    name: "categories/gcid:homeless_service",
    displayName: "Homeless service",
  },
  {
    name: "categories/gcid:homeless_shelter",
    displayName: "Homeless shelter",
  },
  {
    name: "categories/gcid:homeopath",
    displayName: "Homeopath",
  },
  {
    name: "categories/gcid:homeopathic_pharmacy",
    displayName: "Homeopathic pharmacy",
  },
  {
    name: "categories/gcid:homeowners_association",
    displayName: "Homeowners' association",
  },
  {
    name: "categories/gcid:honda_dealer",
    displayName: "Honda dealer",
  },
  {
    name: "categories/gcid:honduran_restaurant",
    displayName: "Honduran restaurant",
  },
  {
    name: "categories/gcid:honey_farm",
    displayName: "Honey Farm",
  },
  {
    name: "categories/gcid:hong_kong_style_cafe",
    displayName: "Cha chaan teng (Hong Kong-style cafe)",
  },
  {
    name: "categories/gcid:hong_kong_style_fast_food_restaurant",
    displayName: "Hong Kong style fast food restaurant",
  },
  {
    name: "categories/gcid:hookah_bar",
    displayName: "Shisha bar",
  },
  {
    name: "categories/gcid:hookah_store",
    displayName: "Hookah Shop",
  },
  {
    name: "categories/gcid:horse_boarding_stable",
    displayName: "Horse boarding stable",
  },
  {
    name: "categories/gcid:horse_breeder",
    displayName: "Horse breeder",
  },
  {
    name: "categories/gcid:horse_rental_service",
    displayName: "Horse rental service",
  },
  {
    name: "categories/gcid:horse_riding_field",
    displayName: "Horse riding field",
  },
  {
    name: "categories/gcid:horse_riding_school",
    displayName: "Horse riding school",
  },
  {
    name: "categories/gcid:horse_trailer_dealer",
    displayName: "Horse trailer dealer",
  },
  {
    name: "categories/gcid:horse_trainer",
    displayName: "Horse trainer",
  },
  {
    name: "categories/gcid:horseback_riding_service",
    displayName: "Horse-Riding Service",
  },
  {
    name: "categories/gcid:horsebox_specialist",
    displayName: "Horse transport supplier",
  },
  {
    name: "categories/gcid:horseshoe_smith",
    displayName: "Horseshoe smith",
  },
  {
    name: "categories/gcid:horsestable_studfarm",
    displayName: "Horsestable studfarm",
  },
  {
    name: "categories/gcid:hose_supplier",
    displayName: "Hose supplier",
  },
  {
    name: "categories/gcid:hospice",
    displayName: "Hospice",
  },
  {
    name: "categories/gcid:hospital",
    displayName: "Hospital",
  },
  {
    name: "categories/gcid:hospital_and_equipment_supplies",
    displayName: "Hospital equipment and supplies",
  },
  {
    name: "categories/gcid:hospital_department",
    displayName: "Hospital department",
  },
  {
    name: "categories/gcid:hospitality_and_tourism_school",
    displayName: "Hospitality and tourism school",
  },
  {
    name: "categories/gcid:hospitality_high_school",
    displayName: "Hospitality high school",
  },
  {
    name: "categories/gcid:host_club",
    displayName: "Host club",
  },
  {
    name: "categories/gcid:hostel",
    displayName: "Backpacker Hostel",
  },
  {
    name: "categories/gcid:hot_bedstone_spa",
    displayName: "Hot bedstone spa",
  },
  {
    name: "categories/gcid:hot_dog_restaurant",
    displayName: "Hot dog restaurant",
  },
  {
    name: "categories/gcid:hot_dog_stand",
    displayName: "Hot dog stand",
  },
  {
    name: "categories/gcid:hot_pot_restaurant",
    displayName: "Hot pot restaurant",
  },
  {
    name: "categories/gcid:hot_spring_hotel",
    displayName: "Hot spring hotel",
  },
  {
    name: "categories/gcid:hot_tub_repair_service",
    displayName: "Hot Tub Repair Service",
  },
  {
    name: "categories/gcid:hot_tub_store",
    displayName: "Hot Tub Shop",
  },
  {
    name: "categories/gcid:hot_water_system_supplier",
    displayName: "Hot water system supplier",
  },
  {
    name: "categories/gcid:hotel",
    displayName: "Hotel",
  },
  {
    name: "categories/gcid:hotel_management_school",
    displayName: "Hotel Management Institute",
  },
  {
    name: "categories/gcid:hotel_supply_store",
    displayName: "Hotel Supply Shop",
  },
  {
    name: "categories/gcid:house_cleaning_service",
    displayName: "House cleaning service",
  },
  {
    name: "categories/gcid:house_clearance_service",
    displayName: "House clearance service",
  },
  {
    name: "categories/gcid:house_sitter",
    displayName: "House sitter",
  },
  {
    name: "categories/gcid:house_sitter_agency",
    displayName: "House sitter agency",
  },
  {
    name: "categories/gcid:houseboat_rental_service",
    displayName: "Houseboat rental service",
  },
  {
    name: "categories/gcid:household_chemicals_supplier",
    displayName: "Household chemicals supplier",
  },
  {
    name: "categories/gcid:household_goods_wholesaler",
    displayName: "Household goods wholesaler",
  },
  {
    name: "categories/gcid:housing_association",
    displayName: "Housing association",
  },
  {
    name: "categories/gcid:housing_authority",
    displayName: "Housing Offices",
  },
  {
    name: "categories/gcid:housing_complex",
    displayName: "Housing complex",
  },
  {
    name: "categories/gcid:housing_cooperative",
    displayName: "Housing Cooperative",
  },
  {
    name: "categories/gcid:housing_development",
    displayName: "Housing Development",
  },
  {
    name: "categories/gcid:housing_society",
    displayName: "Housing society",
  },
  {
    name: "categories/gcid:housing_utility_company",
    displayName: "Housing utility company",
  },
  {
    name: "categories/gcid:hua_gong_shop",
    displayName: "Hua gong shop",
  },
  {
    name: "categories/gcid:hua_niao_market_place",
    displayName: "Hua niao market place",
  },
  {
    name: "categories/gcid:hub_cap_supplier",
    displayName: "Hub cap supplier",
  },
  {
    name: "categories/gcid:human_ressource_consulting",
    displayName: "Human resource consulting",
  },
  {
    name: "categories/gcid:hunan_style_restaurant",
    displayName: "Hunan restaurant",
  },
  {
    name: "categories/gcid:hungarian_restaurant",
    displayName: "Hungarian restaurant",
  },
  {
    name: "categories/gcid:hunting_and_fishing_store",
    displayName: "Hunting and Fishing Shop",
  },
  {
    name: "categories/gcid:hunting_area",
    displayName: "Hunting area",
  },
  {
    name: "categories/gcid:hunting_club",
    displayName: "Hunting club",
  },
  {
    name: "categories/gcid:hunting_preserve",
    displayName: "Hunting preserve",
  },
  {
    name: "categories/gcid:hunting_store",
    displayName: "Hunting Shop",
  },
  {
    name: "categories/gcid:hvac_contractor",
    displayName: "HVAC contractor",
  },
  {
    name: "categories/gcid:hyderabadi_restaurant",
    displayName: "Hyderabadi restaurant",
  },
  {
    name: "categories/gcid:hydraulic_engineer",
    displayName: "Hydraulic Engineer",
  },
  {
    name: "categories/gcid:hydraulic_equipment_supplier",
    displayName: "Hydraulic equipment supplier",
  },
  {
    name: "categories/gcid:hydraulic_repair_service",
    displayName: "Hydraulic repair service",
  },
  {
    name: "categories/gcid:hydroelectric_power_plant",
    displayName: "Hydroelectric power plant",
  },
  {
    name: "categories/gcid:hydroponics_equipment_supplier",
    displayName: "Hydroponics equipment supplier",
  },
  {
    name: "categories/gcid:hygiene_articles_wholesaler",
    displayName: "Hygiene articles wholesaler",
  },
  {
    name: "categories/gcid:hygiene_station",
    displayName: "Hygiene station",
  },
  {
    name: "categories/gcid:hyperbaric_medicine_physician",
    displayName: "Hyperbaric medicine physician",
  },
  {
    name: "categories/gcid:hypermarket",
    displayName: "Hypermarket",
  },
  {
    name: "categories/gcid:hypnotherapy_service",
    displayName: "Hypnotherapy service",
  },
  {
    name: "categories/gcid:hyundai_dealer",
    displayName: "Hyundai dealer",
  },
  {
    name: "categories/gcid:ice_cream_equipment_supplier",
    displayName: "Ice cream equipment supplier",
  },
  {
    name: "categories/gcid:ice_cream_shop",
    displayName: "Ice cream shop",
  },
  {
    name: "categories/gcid:ice_hockey_club",
    displayName: "Ice hockey club",
  },
  {
    name: "categories/gcid:ice_skating_club",
    displayName: "Ice skating club",
  },
  {
    name: "categories/gcid:ice_skating_instructor",
    displayName: "Ice skating instructor",
  },
  {
    name: "categories/gcid:ice_skating_rink",
    displayName: "Ice skating rink",
  },
  {
    name: "categories/gcid:ice_supplier",
    displayName: "Ice supplier",
  },
  {
    name: "categories/gcid:icelandic_restaurant",
    displayName: "Icelandic restaurant",
  },
  {
    name: "categories/gcid:icse_school",
    displayName: "ICSE School",
  },
  {
    name: "categories/gcid:idol_manufacturer",
    displayName: "Idol manufacturer",
  },
  {
    name: "categories/gcid:ikan_bakar_restaurant",
    displayName: "Ikan bakar restaurant",
  },
  {
    name: "categories/gcid:image_consultant",
    displayName: "Image Consultant",
  },
  {
    name: "categories/gcid:imax_theater",
    displayName: "Imax Cinema",
  },
  {
    name: "categories/gcid:immigration_and_naturalization_service",
    displayName: "Immigration & Naturalisation Service",
  },
  {
    name: "categories/gcid:immigration_attorney",
    displayName: "Immigration Lawyer",
  },
  {
    name: "categories/gcid:immigration_detention_center",
    displayName: "Immigration detention centre",
  },
  {
    name: "categories/gcid:immunologist",
    displayName: "Immunologist",
  },
  {
    name: "categories/gcid:impermeabilization_service",
    displayName: "Impermeabilisation Service",
  },
  {
    name: "categories/gcid:import_export_company",
    displayName: "Import Export Company",
  },
  {
    name: "categories/gcid:importer",
    displayName: "Importer",
  },
  {
    name: "categories/gcid:incense_supplier",
    displayName: "Incense Shop",
  },
  {
    name: "categories/gcid:incineration_plant",
    displayName: "Incineration plant",
  },
  {
    name: "categories/gcid:income_protection_insurance",
    displayName: "Income Protection Insurance Company",
  },
  {
    name: "categories/gcid:income_tax_help_association",
    displayName: "Income tax help association",
  },
  {
    name: "categories/gcid:indian_grocery_store",
    displayName: "Indian Grocery Shop",
  },
  {
    name: "categories/gcid:indian_motorcycle_dealer",
    displayName: "Indian Motorcycle dealer",
  },
  {
    name: "categories/gcid:indian_muslim_restaurant",
    displayName: "Indian Muslim Restaurant",
  },
  {
    name: "categories/gcid:indian_restaurant",
    displayName: "Indian restaurant",
  },
  {
    name: "categories/gcid:indian_sizzler_restaurant",
    displayName: "Indian sizzler restaurant",
  },
  {
    name: "categories/gcid:indian_sweets_shop",
    displayName: "Indian sweets shop",
  },
  {
    name: "categories/gcid:indian_takeaway",
    displayName: "Indian takeaway",
  },
  {
    name: "categories/gcid:indonesian_restaurant",
    displayName: "Indonesian restaurant",
  },
  {
    name: "categories/gcid:indoor_cycling",
    displayName: "Indoor cycling",
  },
  {
    name: "categories/gcid:indoor_golf_course",
    displayName: "Indoor golf course",
  },
  {
    name: "categories/gcid:indoor_playground",
    displayName: "Indoor playground",
  },
  {
    name: "categories/gcid:indoor_snowcenter",
    displayName: "Indoor Snowcentre",
  },
  {
    name: "categories/gcid:indoor_swimming_pool",
    displayName: "Indoor swimming pool",
  },
  {
    name: "categories/gcid:industrial_chemicals_wholesaler",
    displayName: "Industrial chemicals wholesaler",
  },
  {
    name: "categories/gcid:industrial_consultant",
    displayName: "Manufacturing & Industrial Consultant",
  },
  {
    name: "categories/gcid:industrial_design_company",
    displayName: "Industrial design company",
  },
  {
    name: "categories/gcid:industrial_door_supplier",
    displayName: "Industrial door supplier",
  },
  {
    name: "categories/gcid:industrial_engineer",
    displayName: "Industrial engineer",
  },
  {
    name: "categories/gcid:industrial_engineers_association",
    displayName: "Industrial engineers association",
  },
  {
    name: "categories/gcid:industrial_equipment_supplier",
    displayName: "Industrial equipment supplier",
  },
  {
    name: "categories/gcid:industrial_framework_supplier",
    displayName: "Industrial framework supplier",
  },
  {
    name: "categories/gcid:industrial_gas_supplier",
    displayName: "Industrial gas supplier",
  },
  {
    name: "categories/gcid:industrial_real_estate_agency",
    displayName: "Industrial Real Estate Agency",
  },
  {
    name: "categories/gcid:industrial_spares_and_products_wholesaler",
    displayName: "Industrial Spares & Products Wholesaler",
  },
  {
    name: "categories/gcid:industrial_supermarket",
    displayName: "Industrial supermarket",
  },
  {
    name: "categories/gcid:industrial_technical_engineers_association",
    displayName: "Industrial technical engineers association",
  },
  {
    name: "categories/gcid:industrial_vacuum_equipment_supplier",
    displayName: "Industrial vacuum equipment supplier",
  },
  {
    name: "categories/gcid:infectious_disease_physician",
    displayName: "Infectious Disease Doctor",
  },
  {
    name: "categories/gcid:infiniti_dealer",
    displayName: "Infiniti dealer",
  },
  {
    name: "categories/gcid:information_and_referral_services",
    displayName: "Information & Referral Services Agency",
  },
  {
    name: "categories/gcid:information_bureau",
    displayName: "Information bureau",
  },
  {
    name: "categories/gcid:information_services",
    displayName: "Information services",
  },
  {
    name: "categories/gcid:inn",
    displayName: "Inn",
  },
  {
    name: "categories/gcid:insolvency_service",
    displayName: "Insolvency service",
  },
  {
    name: "categories/gcid:institute_of_geography_and_statistics",
    displayName: "Institute of Geography and Statistics",
  },
  {
    name: "categories/gcid:instrumentation_engineer",
    displayName: "Instrumentation engineer",
  },
  {
    name: "categories/gcid:insulation_contractor",
    displayName: "Insulation Contractor",
  },
  {
    name: "categories/gcid:insulation_materials_store",
    displayName: "Insulation Materials Shop",
  },
  {
    name: "categories/gcid:insulator_supplier",
    displayName: "Insulator Supplier",
  },
  {
    name: "categories/gcid:insurance_agency",
    displayName: "Insurance agency",
  },
  {
    name: "categories/gcid:insurance_attorney",
    displayName: "Insurance Lawyer",
  },
  {
    name: "categories/gcid:insurance_broker",
    displayName: "Insurance broker",
  },
  {
    name: "categories/gcid:insurance_company",
    displayName: "Insurance company",
  },
  {
    name: "categories/gcid:insurance_school",
    displayName: "Insurance school",
  },
  {
    name: "categories/gcid:intellectual_property_registry",
    displayName: "Intellectual property registry",
  },
  {
    name: "categories/gcid:intelligence_agency",
    displayName: "Intelligence Agency",
  },
  {
    name: "categories/gcid:intensivist",
    displayName: "Intensivist",
  },
  {
    name: "categories/gcid:interior_architect_office",
    displayName: "Interior architect office",
  },
  {
    name: "categories/gcid:interior_construction_contractor",
    displayName: "Interior construction contractor",
  },
  {
    name: "categories/gcid:interior_decorator",
    displayName: "Interior Decorator",
  },
  {
    name: "categories/gcid:interior_designer",
    displayName: "Interior designer",
  },
  {
    name: "categories/gcid:interior_door",
    displayName: "Interior door shop",
  },
  {
    name: "categories/gcid:interior_fitting_contractor",
    displayName: "Interior fitting contractor",
  },
  {
    name: "categories/gcid:interior_plant_service",
    displayName: "Interior plant hire service",
  },
  {
    name: "categories/gcid:internal_medicine_ward",
    displayName: "Internal medicine ward",
  },
  {
    name: "categories/gcid:international_airport",
    displayName: "International airport",
  },
  {
    name: "categories/gcid:international_school",
    displayName: "International school",
  },
  {
    name: "categories/gcid:international_trade_consultant",
    displayName: "International trade consultant",
  },
  {
    name: "categories/gcid:internet_cafe",
    displayName: "Internet cafe",
  },
  {
    name: "categories/gcid:internet_marketing_service",
    displayName: "Internet marketing service",
  },
  {
    name: "categories/gcid:internet_service_provider",
    displayName: "Internet service provider",
  },
  {
    name: "categories/gcid:internet_shop",
    displayName: "Internet shop",
  },
  {
    name: "categories/gcid:internist",
    displayName: "Internist",
  },
  {
    name: "categories/gcid:inverter_and_ups_manufacturer",
    displayName: "Inverter & UPS Manufacturer",
  },
  {
    name: "categories/gcid:investment_bank",
    displayName: "Investment Banking",
  },
  {
    name: "categories/gcid:investment_company",
    displayName: "Investment company",
  },
  {
    name: "categories/gcid:investment_service",
    displayName: "Investment service",
  },
  {
    name: "categories/gcid:invitation_printing_service",
    displayName: "Invitation printing service",
  },
  {
    name: "categories/gcid:irish_goods_store",
    displayName: "Irish Goods Shop",
  },
  {
    name: "categories/gcid:irish_pub",
    displayName: "Irish pub",
  },
  {
    name: "categories/gcid:irish_restaurant",
    displayName: "Irish restaurant",
  },
  {
    name: "categories/gcid:iron_and_steel_industry",
    displayName: "Iron & Steel Industry",
  },
  {
    name: "categories/gcid:iron_and_steel_store",
    displayName: "Iron & Steel Store",
  },
  {
    name: "categories/gcid:iron_steel_contractor",
    displayName: "Iron steel contractor",
  },
  {
    name: "categories/gcid:iron_ware_dealer",
    displayName: "Iron ware dealer",
  },
  {
    name: "categories/gcid:iron_works",
    displayName: "Iron works",
  },
  {
    name: "categories/gcid:irrigation_equipment_supplier",
    displayName: "Irrigation equipment supplier",
  },
  {
    name: "categories/gcid:israeli_restaurant",
    displayName: "Israeli restaurant",
  },
  {
    name: "categories/gcid:isuzu_dealer",
    displayName: "Isuzu dealer",
  },
  {
    name: "categories/gcid:italian_grocery_store",
    displayName: "Italian Food Shop",
  },
  {
    name: "categories/gcid:italian_restaurant",
    displayName: "Italian restaurant",
  },
  {
    name: "categories/gcid:iut",
    displayName: "Institute of technology",
  },
  {
    name: "categories/gcid:jaguar_dealer",
    displayName: "Jaguar dealer",
  },
  {
    name: "categories/gcid:jain_temple",
    displayName: "Jain temple",
  },
  {
    name: "categories/gcid:jamaican_restaurant",
    displayName: "Jamaican restaurant",
  },
  {
    name: "categories/gcid:janitorial_equipment_supplier",
    displayName: "Janitorial equipment supplier",
  },
  {
    name: "categories/gcid:janitorial_service",
    displayName: "Janitorial service",
  },
  {
    name: "categories/gcid:japanese_authentic_restaurant",
    displayName: "Authentic Japanese Restaurant",
  },
  {
    name: "categories/gcid:japanese_cheap_sweets_shop",
    displayName: "Japanese cheap sweets shop",
  },
  {
    name: "categories/gcid:japanese_confectionery_shop",
    displayName: "Japanese Sweet Shop",
  },
  {
    name: "categories/gcid:japanese_curry_restaurant",
    displayName: "Japanese curry restaurant",
  },
  {
    name: "categories/gcid:japanese_delicatessen",
    displayName: "Japanese delicatessen",
  },
  {
    name: "categories/gcid:japanese_grocery_store",
    displayName: "Japanese supermarket",
  },
  {
    name: "categories/gcid:japanese_high_quality_restaurant",
    displayName: "Ryotei restaurant",
  },
  {
    name: "categories/gcid:japanese_izakaya_restaurant",
    displayName: "Izakaya restaurant",
  },
  {
    name: "categories/gcid:japanese_language_instructor",
    displayName: "Japanese language instructor",
  },
  {
    name: "categories/gcid:japanese_regional_restaurant",
    displayName: "Japanese regional restaurant",
  },
  {
    name: "categories/gcid:japanese_restaurant",
    displayName: "Japanese restaurant",
  },
  {
    name: "categories/gcid:japanese_steakhouse",
    displayName: "Japanese steakhouse",
  },
  {
    name: "categories/gcid:japanese_sweets_restaurant",
    displayName: "Japanese sweets restaurant",
  },
  {
    name: "categories/gcid:japanized_western_food_restaurant",
    displayName: "Japanized western restaurant",
  },
  {
    name: "categories/gcid:javanese_restaurant",
    displayName: "Javanese restaurant",
  },
  {
    name: "categories/gcid:jazz_club",
    displayName: "Jazz club",
  },
  {
    name: "categories/gcid:jeep_dealer",
    displayName: "Jeep dealer",
  },
  {
    name: "categories/gcid:jehovahs_witness_church",
    displayName: "Jehovah's Witness Kingdom Hall",
  },
  {
    name: "categories/gcid:jeweler",
    displayName: "Jeweller",
  },
  {
    name: "categories/gcid:jewelry_appraiser",
    displayName: "Jewellery Valuer",
  },
  {
    name: "categories/gcid:jewelry_buyer",
    displayName: "Jewellery Buyer",
  },
  {
    name: "categories/gcid:jewelry_designer",
    displayName: "Jewellery Designer",
  },
  {
    name: "categories/gcid:jewelry_engraver",
    displayName: "Jewellery Engraver",
  },
  {
    name: "categories/gcid:jewelry_equipment_supplier",
    displayName: "Jewellery Equipment Supplier",
  },
  {
    name: "categories/gcid:jewelry_exporter",
    displayName: "Jewelry Exporter",
  },
  {
    name: "categories/gcid:jewelry_manufacturer",
    displayName: "Jewelry manufacturer",
  },
  {
    name: "categories/gcid:jewelry_repair_service",
    displayName: "Jewellery Repair Service",
  },
  {
    name: "categories/gcid:jewelry_store",
    displayName: "Jewellery Store",
  },
  {
    name: "categories/gcid:jewish_restaurant",
    displayName: "Jewish restaurant",
  },
  {
    name: "categories/gcid:jiang_su_restaurant",
    displayName: "Jiangsu restaurant",
  },
  {
    name: "categories/gcid:joiner",
    displayName: "Joiner",
  },
  {
    name: "categories/gcid:judicial_auction",
    displayName: "Judicial auction",
  },
  {
    name: "categories/gcid:judicial_scrivener",
    displayName: "Judicial scrivener",
  },
  {
    name: "categories/gcid:judo_club",
    displayName: "Judo club",
  },
  {
    name: "categories/gcid:judo_school",
    displayName: "Judo school",
  },
  {
    name: "categories/gcid:juice_shop",
    displayName: "Juice bar",
  },
  {
    name: "categories/gcid:jujitsu_school",
    displayName: "Jiu jitsu school",
  },
  {
    name: "categories/gcid:junior_college",
    displayName: "Junior college",
  },
  {
    name: "categories/gcid:junk_dealer",
    displayName: "Junk dealer",
  },
  {
    name: "categories/gcid:junk_store",
    displayName: "Junk Store",
  },
  {
    name: "categories/gcid:junkyard",
    displayName: "Scrap yard",
  },
  {
    name: "categories/gcid:justice_department",
    displayName: "Justice department",
  },
  {
    name: "categories/gcid:jute_exporter",
    displayName: "Jute Exporter",
  },
  {
    name: "categories/gcid:jute_mill",
    displayName: "Jute Mill",
  },
  {
    name: "categories/gcid:juvenile_detention_center",
    displayName: "Juvenile Detention Centre",
  },
  {
    name: "categories/gcid:kabaddi_club",
    displayName: "Kabaddi Club",
  },
  {
    name: "categories/gcid:kaiseki_restaurant",
    displayName: "Kaiseki restaurant",
  },
  {
    name: "categories/gcid:kalle_pache_restaurant",
    displayName: "Kalle pache restaurant",
  },
  {
    name: "categories/gcid:karaoke_bar",
    displayName: "Karaoke bar",
  },
  {
    name: "categories/gcid:karaoke_equipment_rental_service",
    displayName: "Karaoke Equipment Hire Service",
  },
  {
    name: "categories/gcid:karate_club",
    displayName: "Karate club",
  },
  {
    name: "categories/gcid:karate_school",
    displayName: "Karate school",
  },
  {
    name: "categories/gcid:karma_dealer",
    displayName: "Karma dealer",
  },
  {
    name: "categories/gcid:karnataka_restaurant",
    displayName: "Karnataka restaurant",
  },
  {
    name: "categories/gcid:kashmiri_restaurant",
    displayName: "Kashmiri restaurant",
  },
  {
    name: "categories/gcid:kazakhstani_restaurant",
    displayName: "Kazakhstani restaurant",
  },
  {
    name: "categories/gcid:kebab_shop",
    displayName: "Kebab Shop",
  },
  {
    name: "categories/gcid:kennel",
    displayName: "Kennels",
  },
  {
    name: "categories/gcid:kerala_restaurant",
    displayName: "Kerala restaurant",
  },
  {
    name: "categories/gcid:kerosene_supplier",
    displayName: "Kerosene supplier",
  },
  {
    name: "categories/gcid:key_duplication_service",
    displayName: "Key Duplication Shop",
  },
  {
    name: "categories/gcid:kia_dealer",
    displayName: "Kia dealer",
  },
  {
    name: "categories/gcid:kickboxing_school",
    displayName: "Kickboxing school",
  },
  {
    name: "categories/gcid:kilt_shop_and_hire",
    displayName: "Kilt shop and hire",
  },
  {
    name: "categories/gcid:kimono_store",
    displayName: "Kimono Shop",
  },
  {
    name: "categories/gcid:kindergarten",
    displayName: "Kindergarten School",
  },
  {
    name: "categories/gcid:kinesiologist",
    displayName: "Kinesiologist",
  },
  {
    name: "categories/gcid:kinesiotherapist",
    displayName: "Kinesiotherapist",
  },
  {
    name: "categories/gcid:kiosk",
    displayName: "Kiosk",
  },
  {
    name: "categories/gcid:kitchen_furniture_store",
    displayName: "Kitchen Furniture Shop",
  },
  {
    name: "categories/gcid:kitchen_remodeler",
    displayName: "Kitchen Renovator",
  },
  {
    name: "categories/gcid:kitchen_supply_store",
    displayName: "Kitchen supply shop",
  },
  {
    name: "categories/gcid:kite_shop",
    displayName: "Kite shop",
  },
  {
    name: "categories/gcid:knife_manufacturing",
    displayName: "Knife manufacturing",
  },
  {
    name: "categories/gcid:knife_store",
    displayName: "Knife Shop",
  },
  {
    name: "categories/gcid:knit_shop",
    displayName: "Knit shop",
  },
  {
    name: "categories/gcid:knitting_instructor",
    displayName: "Knitting instructor",
  },
  {
    name: "categories/gcid:knitwear_manufacturer",
    displayName: "Knitwear manufacturer",
  },
  {
    name: "categories/gcid:kofta_restaurant",
    displayName: "Kofta restaurant",
  },
  {
    name: "categories/gcid:konkani_restaurant",
    displayName: "Konkani restaurant",
  },
  {
    name: "categories/gcid:korean_barbecue_restaurant",
    displayName: "Korean barbecue restaurant",
  },
  {
    name: "categories/gcid:korean_beef_restaurant",
    displayName: "Korean beef restaurant",
  },
  {
    name: "categories/gcid:korean_church",
    displayName: "Korean church",
  },
  {
    name: "categories/gcid:korean_grocery_store",
    displayName: "Korean Food Shop",
  },
  {
    name: "categories/gcid:korean_restaurant",
    displayName: "Korean restaurant",
  },
  {
    name: "categories/gcid:korean_rib_restaurant",
    displayName: "Korean rib restaurant",
  },
  {
    name: "categories/gcid:koshari_restaurant",
    displayName: "Koshari restaurant",
  },
  {
    name: "categories/gcid:kosher_grocery_store",
    displayName: "Kosher Food Shop",
  },
  {
    name: "categories/gcid:kosher_restaurant",
    displayName: "Kosher restaurant",
  },
  {
    name: "categories/gcid:kung_fu_school",
    displayName: "Kung fu school",
  },
  {
    name: "categories/gcid:kushiyaki_restaurant",
    displayName: "Kushiyaki restaurant",
  },
  {
    name: "categories/gcid:kyoto_cuisine_restaurant",
    displayName: "Kyoto style Japanese restaurant",
  },
  {
    name: "categories/gcid:labor_relations_attorney",
    displayName: "Labour Relations Lawyer",
  },
  {
    name: "categories/gcid:labor_union",
    displayName: "Trade Union",
  },
  {
    name: "categories/gcid:laboratory",
    displayName: "Laboratory",
  },
  {
    name: "categories/gcid:laboratory_equipment_supplier",
    displayName: "Laboratory equipment supplier",
  },
  {
    name: "categories/gcid:ladder_supplier",
    displayName: "Ladder Supplier",
  },
  {
    name: "categories/gcid:lamborghini_dealer",
    displayName: "Lamborghini dealer",
  },
  {
    name: "categories/gcid:laminating_equipment_supplier",
    displayName: "Laminating equipment supplier",
  },
  {
    name: "categories/gcid:lamination_service",
    displayName: "Lamination service",
  },
  {
    name: "categories/gcid:lamp_repair_service",
    displayName: "Lamp repair service",
  },
  {
    name: "categories/gcid:lamp_shade_supplier",
    displayName: "Lamp shade supplier",
  },
  {
    name: "categories/gcid:lancia_dealer",
    displayName: "Lancia dealer",
  },
  {
    name: "categories/gcid:land_allotment",
    displayName: "Garden Allotment",
  },
  {
    name: "categories/gcid:land_planning_authority",
    displayName: "Land Planning Authority",
  },
  {
    name: "categories/gcid:land_reform_institute",
    displayName: "Land reform institute",
  },
  {
    name: "categories/gcid:land_rover_dealer",
    displayName: "Land Rover dealer",
  },
  {
    name: "categories/gcid:land_surveying_office",
    displayName: "Land surveying office",
  },
  {
    name: "categories/gcid:land_surveyor",
    displayName: "Land surveyor",
  },
  {
    name: "categories/gcid:landscape_architect",
    displayName: "Landscape architect",
  },
  {
    name: "categories/gcid:landscape_designer",
    displayName: "Landscape designer",
  },
  {
    name: "categories/gcid:landscape_lighting_designer",
    displayName: "Landscape lighting designer",
  },
  {
    name: "categories/gcid:landscaper",
    displayName: "Landscape Gardener",
  },
  {
    name: "categories/gcid:landscaping_supply_store",
    displayName: "Landscaping Supply Shop",
  },
  {
    name: "categories/gcid:language_school",
    displayName: "Language school",
  },
  {
    name: "categories/gcid:laotian_restaurant",
    displayName: "Laotian restaurant",
  },
  {
    name: "categories/gcid:lapidary",
    displayName: "Gemstone Jeweler",
  },
  {
    name: "categories/gcid:laser_cutting_service",
    displayName: "Laser Cutting Service Provider",
  },
  {
    name: "categories/gcid:laser_equipment_supplier",
    displayName: "Laser equipment supplier",
  },
  {
    name: "categories/gcid:laser_hair_removal_service",
    displayName: "Laser hair removal service",
  },
  {
    name: "categories/gcid:laser_tag_center",
    displayName: "Laser Tag Centre",
  },
  {
    name: "categories/gcid:lasik_surgeon",
    displayName: "Lasik surgeon",
  },
  {
    name: "categories/gcid:latin_american_restaurant",
    displayName: "Latin American restaurant",
  },
  {
    name: "categories/gcid:laundromat",
    displayName: "Launderette",
  },
  {
    name: "categories/gcid:laundry",
    displayName: "Laundry",
  },
  {
    name: "categories/gcid:laundry_service",
    displayName: "Laundry service",
  },
  {
    name: "categories/gcid:law_book_store",
    displayName: "Law Book Store",
  },
  {
    name: "categories/gcid:law_firm",
    displayName: "Law firm",
  },
  {
    name: "categories/gcid:law_library",
    displayName: "Law library",
  },
  {
    name: "categories/gcid:law_school",
    displayName: "Law College",
  },
  {
    name: "categories/gcid:lawn_bowls_club",
    displayName: "Lawn bowls club",
  },
  {
    name: "categories/gcid:lawn_care_service",
    displayName: "Lawn care service",
  },
  {
    name: "categories/gcid:lawn_equipment_rental_service",
    displayName: "Lawn equipment rental service",
  },
  {
    name: "categories/gcid:lawn_irrigation_equipment_supplier",
    displayName: "Lawn irrigation equipment supplier",
  },
  {
    name: "categories/gcid:lawn_mower_repair_service",
    displayName: "Lawn mower repair service",
  },
  {
    name: "categories/gcid:lawn_mower_store",
    displayName: "Lawn Mower Shop",
  },
  {
    name: "categories/gcid:lawn_sprinkler_system_contractor",
    displayName: "Lawn sprinkler system contractor",
  },
  {
    name: "categories/gcid:lawyer",
    displayName: "Lawyer",
  },
  {
    name: "categories/gcid:lawyers_association",
    displayName: "Lawyers association",
  },
  {
    name: "categories/gcid:leagues_club",
    displayName: "Leagues club",
  },
  {
    name: "categories/gcid:learner_driver_training_area",
    displayName: "Learner driver training area",
  },
  {
    name: "categories/gcid:learning_center",
    displayName: "Learning Centre",
  },
  {
    name: "categories/gcid:leasing_service",
    displayName: "Leasing service",
  },
  {
    name: "categories/gcid:leather_cleaning_service",
    displayName: "Leather cleaning service",
  },
  {
    name: "categories/gcid:leather_coats_store",
    displayName: "Leather Coats Shop",
  },
  {
    name: "categories/gcid:leather_exporter",
    displayName: "Leather Exporter",
  },
  {
    name: "categories/gcid:leather_goods_manufacturer",
    displayName: "Leather Products Manufacturer",
  },
  {
    name: "categories/gcid:leather_goods_store",
    displayName: "Leather Goods Shop",
  },
  {
    name: "categories/gcid:leather_goods_supplier",
    displayName: "Leather goods supplier",
  },
  {
    name: "categories/gcid:leather_goods_wholesaler",
    displayName: "Leather Goods Wholesaler",
  },
  {
    name: "categories/gcid:leather_repair_service",
    displayName: "Leather repair service",
  },
  {
    name: "categories/gcid:leather_wholesaler",
    displayName: "Leather wholesaler",
  },
  {
    name: "categories/gcid:lebanese_restaurant",
    displayName: "Lebanese restaurant",
  },
  {
    name: "categories/gcid:lechon_restaurant",
    displayName: "Lechon restaurant",
  },
  {
    name: "categories/gcid:legal_affairs_bureau",
    displayName: "Legal affairs bureau",
  },
  {
    name: "categories/gcid:legal_aid_office",
    displayName: "Legal aid office",
  },
  {
    name: "categories/gcid:legal_services",
    displayName: "Legal services",
  },
  {
    name: "categories/gcid:leisurecentre",
    displayName: "Leisure centre",
  },
  {
    name: "categories/gcid:lexus_dealer",
    displayName: "Lexus dealer",
  },
  {
    name: "categories/gcid:library",
    displayName: "Library",
  },
  {
    name: "categories/gcid:license_bureau",
    displayName: "Licence Office",
  },
  {
    name: "categories/gcid:license_plate_frames_supplier",
    displayName: "License plate frames supplier",
  },
  {
    name: "categories/gcid:lido",
    displayName: "Lido",
  },
  {
    name: "categories/gcid:life_coach",
    displayName: "Life coach",
  },
  {
    name: "categories/gcid:life_insurance_agency",
    displayName: "Life Insurance Agency",
  },
  {
    name: "categories/gcid:light_bulb_supplier",
    displayName: "Light bulb supplier",
  },
  {
    name: "categories/gcid:lighting_consultant",
    displayName: "Lighting consultant",
  },
  {
    name: "categories/gcid:lighting_contractor",
    displayName: "Lighting contractor",
  },
  {
    name: "categories/gcid:lighting_manufacturer",
    displayName: "Lighting manufacturer",
  },
  {
    name: "categories/gcid:lighting_store",
    displayName: "Lighting Shop",
  },
  {
    name: "categories/gcid:lighting_wholesaler",
    displayName: "Lighting wholesaler",
  },
  {
    name: "categories/gcid:ligurian_restaurant",
    displayName: "Ligurian restaurant",
  },
  {
    name: "categories/gcid:limousine_service",
    displayName: "Limousine service",
  },
  {
    name: "categories/gcid:lincoln_mercury_dealer",
    displayName: "Lincoln dealer",
  },
  {
    name: "categories/gcid:line_marking_service",
    displayName: "Line marking service",
  },
  {
    name: "categories/gcid:linens_store",
    displayName: "Linen Shop",
  },
  {
    name: "categories/gcid:lingerie_manufacturer",
    displayName: "Lingerie manufacturer",
  },
  {
    name: "categories/gcid:lingerie_store",
    displayName: "Lingerie shop",
  },
  {
    name: "categories/gcid:lingerie_wholesaler",
    displayName: "Lingerie wholesaler",
  },
  {
    name: "categories/gcid:linoleum_store",
    displayName: "Linoleum Shop",
  },
  {
    name: "categories/gcid:liquidator",
    displayName: "Liquidator",
  },
  {
    name: "categories/gcid:liquor_store",
    displayName: "Liquor Shop",
  },
  {
    name: "categories/gcid:liquor_wholesaler",
    displayName: "Liquor wholesaler",
  },
  {
    name: "categories/gcid:literacy_program",
    displayName: "Literacy program",
  },
  {
    name: "categories/gcid:lithuanian_restaurant",
    displayName: "Lithuanian restaurant",
  },
  {
    name: "categories/gcid:little_league_club",
    displayName: "Little league club",
  },
  {
    name: "categories/gcid:little_league_field",
    displayName: "Little league field",
  },
  {
    name: "categories/gcid:live_music_bar",
    displayName: "Live music bar",
  },
  {
    name: "categories/gcid:live_music_venue",
    displayName: "Live music venue",
  },
  {
    name: "categories/gcid:livery_company",
    displayName: "Livery company",
  },
  {
    name: "categories/gcid:livestock_auction_house",
    displayName: "Livestock Auction House",
  },
  {
    name: "categories/gcid:livestock_breeder",
    displayName: "Livestock breeder",
  },
  {
    name: "categories/gcid:livestock_dealer",
    displayName: "Livestock dealer",
  },
  {
    name: "categories/gcid:livestock_producer",
    displayName: "Livestock producer",
  },
  {
    name: "categories/gcid:loan_agency",
    displayName: "Loan agency",
  },
  {
    name: "categories/gcid:local_government_office",
    displayName: "Local Government Office",
  },
  {
    name: "categories/gcid:local_history_museum",
    displayName: "Local history museum",
  },
  {
    name: "categories/gcid:local_medical_services",
    displayName: "Local medical services",
  },
  {
    name: "categories/gcid:lock_store",
    displayName: "Lock Store",
  },
  {
    name: "categories/gcid:locks_supplier",
    displayName: "Locks Supplier",
  },
  {
    name: "categories/gcid:locksmith",
    displayName: "Locksmith",
  },
  {
    name: "categories/gcid:lodge",
    displayName: "Lodge",
  },
  {
    name: "categories/gcid:log_cabins",
    displayName: "Log cabins",
  },
  {
    name: "categories/gcid:log_home_builder",
    displayName: "Log home builder",
  },
  {
    name: "categories/gcid:logging_contractor",
    displayName: "Logging contractor",
  },
  {
    name: "categories/gcid:logistics_service",
    displayName: "Logistics service",
  },
  {
    name: "categories/gcid:lombardian_restaurant",
    displayName: "Lombardian restaurant",
  },
  {
    name: "categories/gcid:loss_adjuster",
    displayName: "Loss adjuster",
  },
  {
    name: "categories/gcid:lost_property_office",
    displayName: "Lost property office",
  },
  {
    name: "categories/gcid:lottery_retailer",
    displayName: "Lottery Retailer",
  },
  {
    name: "categories/gcid:lottery_shop",
    displayName: "Lottery shop",
  },
  {
    name: "categories/gcid:lounge",
    displayName: "Lounge",
  },
  {
    name: "categories/gcid:love_hotel",
    displayName: "Love hotel",
  },
  {
    name: "categories/gcid:low_emission_zone",
    displayName: "Low emission zone",
  },
  {
    name: "categories/gcid:low_income_housing_program",
    displayName: "Low Income Housing Programme",
  },
  {
    name: "categories/gcid:lpg_conversion",
    displayName: "LPG conversion",
  },
  {
    name: "categories/gcid:lpg_fittment_center",
    displayName: "LPG Fitment Center",
  },
  {
    name: "categories/gcid:luggage_repair_service",
    displayName: "Luggage repair service",
  },
  {
    name: "categories/gcid:luggage_storage_facility",
    displayName: "Luggage storage facility",
  },
  {
    name: "categories/gcid:luggage_store",
    displayName: "Luggage Shop",
  },
  {
    name: "categories/gcid:luggage_wholesaler",
    displayName: "Luggage wholesaler",
  },
  {
    name: "categories/gcid:lumber_store",
    displayName: "Timber merchant",
  },
  {
    name: "categories/gcid:lunch_restaurant",
    displayName: "Lunch restaurant",
  },
  {
    name: "categories/gcid:lutheran_church",
    displayName: "Lutheran church",
  },
  {
    name: "categories/gcid:lyceum",
    displayName: "Lyceum",
  },
  {
    name: "categories/gcid:lymph_drainage",
    displayName: "Lymph drainage therapist",
  },
  {
    name: "categories/gcid:machine_construction",
    displayName: "Machine Construction",
  },
  {
    name: "categories/gcid:machine_knife_supplier",
    displayName: "Machine knife supplier",
  },
  {
    name: "categories/gcid:machine_maintenance",
    displayName: "Machine maintenance",
  },
  {
    name: "categories/gcid:machine_repair_service",
    displayName: "Machine Repair Service",
  },
  {
    name: "categories/gcid:machine_shop",
    displayName: "Machine shop",
  },
  {
    name: "categories/gcid:machine_workshop",
    displayName: "Machine workshop",
  },
  {
    name: "categories/gcid:machinery_parts_manufacturer",
    displayName: "Machinery parts manufacturer",
  },
  {
    name: "categories/gcid:machining_manufacturer",
    displayName: "Machining manufacturer",
  },
  {
    name: "categories/gcid:macrobiotic_restaurant",
    displayName: "Macrobiotic restaurant",
  },
  {
    name: "categories/gcid:madrilian_restaurant",
    displayName: "Madrilian restaurant",
  },
  {
    name: "categories/gcid:magazine_store",
    displayName: "Newsagent",
  },
  {
    name: "categories/gcid:magic_store",
    displayName: "Magic Shop",
  },
  {
    name: "categories/gcid:magician",
    displayName: "Magician",
  },
  {
    name: "categories/gcid:mah_jong_house",
    displayName: "Mahjong house",
  },
  {
    name: "categories/gcid:mailbox_rental_service",
    displayName: "Postbox Rental Service",
  },
  {
    name: "categories/gcid:mailbox_supplier",
    displayName: "Postbox Supplier",
  },
  {
    name: "categories/gcid:mailing_machine_supplier",
    displayName: "Mailing machine supplier",
  },
  {
    name: "categories/gcid:mailing_service",
    displayName: "Post Office/Courier",
  },
  {
    name: "categories/gcid:main_customs_office",
    displayName: "Main customs office",
  },
  {
    name: "categories/gcid:majorcan_restaurant",
    displayName: "Mallorcan restaurant",
  },
  {
    name: "categories/gcid:makerspace",
    displayName: "Makerspace",
  },
  {
    name: "categories/gcid:makeup_artist",
    displayName: "Make-up artist",
  },
  {
    name: "categories/gcid:malaysian_restaurant",
    displayName: "Malaysian restaurant",
  },
  {
    name: "categories/gcid:maltese_restaurant",
    displayName: "Maltese restaurant",
  },
  {
    name: "categories/gcid:mammography_service",
    displayName: "Mammography service",
  },
  {
    name: "categories/gcid:manado_restaurant",
    displayName: "Manado restaurant",
  },
  {
    name: "categories/gcid:management_school",
    displayName: "Management school",
  },
  {
    name: "categories/gcid:mandarin_restaurant",
    displayName: "Mandarin restaurant",
  },
  {
    name: "categories/gcid:manor_house",
    displayName: "Manor house",
  },
  {
    name: "categories/gcid:manufactured_home_transporter",
    displayName: "Manufactured home transporter",
  },
  {
    name: "categories/gcid:manufacturer",
    displayName: "Manufacturer",
  },
  {
    name: "categories/gcid:maori_organization",
    displayName: "Maori Organisation",
  },
  {
    name: "categories/gcid:map_store",
    displayName: "Map shop",
  },
  {
    name: "categories/gcid:mapping_service",
    displayName: "Mapping service",
  },
  {
    name: "categories/gcid:marae",
    displayName: "Marae",
  },
  {
    name: "categories/gcid:marathi_restaurant",
    displayName: "Maharashtrian Restaurant",
  },
  {
    name: "categories/gcid:marble_contractor",
    displayName: "Marble contractor",
  },
  {
    name: "categories/gcid:marble_supplier",
    displayName: "Marble Store",
  },
  {
    name: "categories/gcid:marche_restaurant",
    displayName: "Marche restaurant",
  },
  {
    name: "categories/gcid:marina",
    displayName: "Marina",
  },
  {
    name: "categories/gcid:marine_engineer",
    displayName: "Marine engineer",
  },
  {
    name: "categories/gcid:marine_self_defense_force",
    displayName: "Marine Self Defence Force",
  },
  {
    name: "categories/gcid:marine_supply_store",
    displayName: "Marine Supply Shop",
  },
  {
    name: "categories/gcid:marine_surveyor",
    displayName: "Marine surveyor",
  },
  {
    name: "categories/gcid:maritime_museum",
    displayName: "Maritime museum",
  },
  {
    name: "categories/gcid:market",
    displayName: "Market",
  },
  {
    name: "categories/gcid:market_researcher",
    displayName: "Market Researcher",
  },
  {
    name: "categories/gcid:marketing_agency",
    displayName: "Marketing agency",
  },
  {
    name: "categories/gcid:marketing_consultant",
    displayName: "Marketing consultant",
  },
  {
    name: "categories/gcid:markmens_clubhouse",
    displayName: "Markmens clubhouse",
  },
  {
    name: "categories/gcid:marquee_hire",
    displayName: "Marquee hire service",
  },
  {
    name: "categories/gcid:marriage_celebrant",
    displayName: "Marriage Celebrant",
  },
  {
    name: "categories/gcid:marriage_counselor",
    displayName: "Marriage Consultant",
  },
  {
    name: "categories/gcid:marriage_license_bureau",
    displayName: "Marriage Registry Office",
  },
  {
    name: "categories/gcid:martial_arts_club",
    displayName: "Martial arts club",
  },
  {
    name: "categories/gcid:martial_arts_school",
    displayName: "Martial arts school",
  },
  {
    name: "categories/gcid:martial_arts_supply_store",
    displayName: "Martial Arts Supply Shop",
  },
  {
    name: "categories/gcid:maserati_dealer",
    displayName: "Maserati dealer",
  },
  {
    name: "categories/gcid:masonic_building",
    displayName: "Masonic Hall",
  },
  {
    name: "categories/gcid:masonry_contractor",
    displayName: "Masonry contractor",
  },
  {
    name: "categories/gcid:masonry_supply_store",
    displayName: "Masonry Supply Shop",
  },
  {
    name: "categories/gcid:massage_school",
    displayName: "Massage school",
  },
  {
    name: "categories/gcid:massage_spa",
    displayName: "Massage spa",
  },
  {
    name: "categories/gcid:massage_supply_store",
    displayName: "Massage Supply Shop",
  },
  {
    name: "categories/gcid:massage_therapist",
    displayName: "Massage therapist",
  },
  {
    name: "categories/gcid:match_box_manufacturer",
    displayName: "Match Box Manufacturer",
  },
  {
    name: "categories/gcid:material_handling_equipment_supplier",
    displayName: "Material handling equipment supplier",
  },
  {
    name: "categories/gcid:maternity_hospital",
    displayName: "Maternity Centre",
  },
  {
    name: "categories/gcid:maternity_store",
    displayName: "Maternity Shop",
  },
  {
    name: "categories/gcid:mathematics_school",
    displayName: "Mathematics school",
  },
  {
    name: "categories/gcid:mattress_store",
    displayName: "Mattress Shop",
  },
  {
    name: "categories/gcid:mausoleum_builder",
    displayName: "Mausoleum builder",
  },
  {
    name: "categories/gcid:maybach_dealer",
    displayName: "Maybach dealer",
  },
  {
    name: "categories/gcid:mazda_dealer",
    displayName: "Mazda dealer",
  },
  {
    name: "categories/gcid:mclaren_dealer",
    displayName: "McLaren dealer",
  },
  {
    name: "categories/gcid:meal_delivery",
    displayName: "Meal Delivery",
  },
  {
    name: "categories/gcid:meal_takeaway",
    displayName: "Takeaway",
  },
  {
    name: "categories/gcid:measuring_instruments_supplier",
    displayName: "Measuring instruments supplier",
  },
  {
    name: "categories/gcid:meat_packer",
    displayName: "Meat packer",
  },
  {
    name: "categories/gcid:meat_processor",
    displayName: "Meat processor",
  },
  {
    name: "categories/gcid:meat_products",
    displayName: "Meat products store",
  },
  {
    name: "categories/gcid:meat_restaurant",
    displayName: "Meat dish restaurant",
  },
  {
    name: "categories/gcid:meat_wholesaler",
    displayName: "Meat wholesaler",
  },
  {
    name: "categories/gcid:mechanic",
    displayName: "Mechanic",
  },
  {
    name: "categories/gcid:mechanical_contractor",
    displayName: "Mechanical contractor",
  },
  {
    name: "categories/gcid:mechanical_engineer",
    displayName: "Mechanical Engineering",
  },
  {
    name: "categories/gcid:mechanical_plant",
    displayName: "Mechanical plant",
  },
  {
    name: "categories/gcid:media_and_information_sciences_faculty",
    displayName: "Media and information sciences faculty",
  },
  {
    name: "categories/gcid:media_company",
    displayName: "Media company",
  },
  {
    name: "categories/gcid:media_consultant",
    displayName: "Media Consultant",
  },
  {
    name: "categories/gcid:media_house",
    displayName: "Media house",
  },
  {
    name: "categories/gcid:mediation_service",
    displayName: "Mediation service",
  },
  {
    name: "categories/gcid:medical_billing_service",
    displayName: "Medical billing service",
  },
  {
    name: "categories/gcid:medical_book_store",
    displayName: "Medical Book Store",
  },
  {
    name: "categories/gcid:medical_center",
    displayName: "Medical centre",
  },
  {
    name: "categories/gcid:medical_certificate_service",
    displayName: "Medical certificate service",
  },
  {
    name: "categories/gcid:medical_clinic",
    displayName: "Clinic",
  },
  {
    name: "categories/gcid:medical_diagnostic_imaging_center",
    displayName: "Medical Diagnostic Imaging Centre",
  },
  {
    name: "categories/gcid:medical_equipment_manufacturer",
    displayName: "Medical Equipment Manufacturer",
  },
  {
    name: "categories/gcid:medical_equipment_supplier",
    displayName: "Medical Equipment Supplier",
  },
  {
    name: "categories/gcid:medical_examiner",
    displayName: "Medical examiner",
  },
  {
    name: "categories/gcid:medical_group",
    displayName: "Medical group",
  },
  {
    name: "categories/gcid:medical_lab",
    displayName: "Medical laboratory",
  },
  {
    name: "categories/gcid:medical_lawyer",
    displayName: "Medical lawyer",
  },
  {
    name: "categories/gcid:medical_office",
    displayName: "Medical office",
  },
  {
    name: "categories/gcid:medical_school",
    displayName: "Medical school",
  },
  {
    name: "categories/gcid:medical_spa",
    displayName: "Medical spa",
  },
  {
    name: "categories/gcid:medical_supply_store",
    displayName: "Medical supply store",
  },
  {
    name: "categories/gcid:medical_technology_manufacturer",
    displayName: "Medical technology manufacturer",
  },
  {
    name: "categories/gcid:medical_transcription_service",
    displayName: "Medical transcription service",
  },
  {
    name: "categories/gcid:medicine_exporter",
    displayName: "Pharmaceuticals Exporter",
  },
  {
    name: "categories/gcid:meditation_center",
    displayName: "Meditation Centre",
  },
  {
    name: "categories/gcid:meditation_instructor",
    displayName: "Meditation Class",
  },
  {
    name: "categories/gcid:mediterranean_restaurant",
    displayName: "Mediterranean restaurant",
  },
  {
    name: "categories/gcid:meeting_planning_service",
    displayName: "Meeting planning service",
  },
  {
    name: "categories/gcid:mehandi_class",
    displayName: "Mehandi Class",
  },
  {
    name: "categories/gcid:mehndi_designer",
    displayName: "Mehndi Designer",
  },
  {
    name: "categories/gcid:memorial",
    displayName: "Memorial",
  },
  {
    name: "categories/gcid:memorial_estate",
    displayName: "Memorial estate",
  },
  {
    name: "categories/gcid:memorial_park",
    displayName: "Memorial park",
  },
  {
    name: "categories/gcid:mennonite_church",
    displayName: "Mennonite church",
  },
  {
    name: "categories/gcid:mens_clothing_store",
    displayName: "Men's Clothes Shop",
  },
  {
    name: "categories/gcid:mens_health_physician",
    displayName: "Men's health physician",
  },
  {
    name: "categories/gcid:mens_tailor",
    displayName: "Gents Tailor",
  },
  {
    name: "categories/gcid:mental_health_clinic",
    displayName: "Mental Hospital",
  },
  {
    name: "categories/gcid:mental_health_service",
    displayName: "Mental Health Services",
  },
  {
    name: "categories/gcid:mercantile_development",
    displayName: "Mercantile development",
  },
  {
    name: "categories/gcid:mercedes_benz_dealer",
    displayName: "Mercedes-Benz dealer",
  },
  {
    name: "categories/gcid:messianic_synagogue",
    displayName: "Messianic synagogue",
  },
  {
    name: "categories/gcid:metal_construction_company",
    displayName: "Metal Construction Company",
  },
  {
    name: "categories/gcid:metal_detecting_equipment_supplier",
    displayName: "Metal detecting equipment supplier",
  },
  {
    name: "categories/gcid:metal_fabricator",
    displayName: "Metal fabricator",
  },
  {
    name: "categories/gcid:metal_finisher",
    displayName: "Metal finisher",
  },
  {
    name: "categories/gcid:metal_heat_treating_service",
    displayName: "Metal heat treating service",
  },
  {
    name: "categories/gcid:metal_industry_suppliers",
    displayName: "Metal industry suppliers",
  },
  {
    name: "categories/gcid:metal_machinery_supplier",
    displayName: "Metal machinery supplier",
  },
  {
    name: "categories/gcid:metal_polishing_service",
    displayName: "Metal Polisher",
  },
  {
    name: "categories/gcid:metal_processing_company",
    displayName: "Metal processing company",
  },
  {
    name: "categories/gcid:metal_stamping_service",
    displayName: "Metal stamping service",
  },
  {
    name: "categories/gcid:metal_supplier",
    displayName: "Metal supplier",
  },
  {
    name: "categories/gcid:metal_working_shop",
    displayName: "Metal working shop",
  },
  {
    name: "categories/gcid:metal_workshop",
    displayName: "Metal workshop",
  },
  {
    name: "categories/gcid:metallurgy_company",
    displayName: "Metallurgy company",
  },
  {
    name: "categories/gcid:metalware_dealer",
    displayName: "Metalware dealer",
  },
  {
    name: "categories/gcid:metalware_producer",
    displayName: "Metalware producer",
  },
  {
    name: "categories/gcid:metaphysical_supply_store",
    displayName: "Metaphysical Supply Shop",
  },
  {
    name: "categories/gcid:methodist_church",
    displayName: "Methodist church",
  },
  {
    name: "categories/gcid:metropolitan_train_company",
    displayName: "Metropolitan train company",
  },
  {
    name: "categories/gcid:mexican_goods_store",
    displayName: "Mexican Goods Shop",
  },
  {
    name: "categories/gcid:mexican_grocery_store",
    displayName: "Mexican Grocers",
  },
  {
    name: "categories/gcid:mexican_restaurant",
    displayName: "Mexican restaurant",
  },
  {
    name: "categories/gcid:mexican_torta_restaurant",
    displayName: "Mexican torta restaurant",
  },
  {
    name: "categories/gcid:meyhane",
    displayName: "Meyhane",
  },
  {
    name: "categories/gcid:mg_dealer",
    displayName: "MG dealer",
  },
  {
    name: "categories/gcid:microbiologist",
    displayName: "Microbiologist",
  },
  {
    name: "categories/gcid:microwave_oven_repair_service",
    displayName: "Microwave Repair Service",
  },
  {
    name: "categories/gcid:mid_atlantic_us_restaurant",
    displayName: "Mid-Atlantic restaurant (US)",
  },
  {
    name: "categories/gcid:middle_eastern_restaurant",
    displayName: "Middle Eastern restaurant",
  },
  {
    name: "categories/gcid:middle_school",
    displayName: "Secondary School",
  },
  {
    name: "categories/gcid:midwife",
    displayName: "Midwife",
  },
  {
    name: "categories/gcid:militar_archive",
    displayName: "Military archive",
  },
  {
    name: "categories/gcid:militar_residence",
    displayName: "Military residence",
  },
  {
    name: "categories/gcid:military_barrack",
    displayName: "Military Barracks",
  },
  {
    name: "categories/gcid:military_base",
    displayName: "Military base",
  },
  {
    name: "categories/gcid:military_board",
    displayName: "Military board",
  },
  {
    name: "categories/gcid:military_cemetery",
    displayName: "Military cemetery",
  },
  {
    name: "categories/gcid:military_hospital",
    displayName: "Military hospital",
  },
  {
    name: "categories/gcid:military_recruiting_office",
    displayName: "Military recruiting office",
  },
  {
    name: "categories/gcid:military_school",
    displayName: "Military School",
  },
  {
    name: "categories/gcid:military_town",
    displayName: "Military town",
  },
  {
    name: "categories/gcid:milk_delivery_service",
    displayName: "Milk delivery service",
  },
  {
    name: "categories/gcid:mill",
    displayName: "Mill",
  },
  {
    name: "categories/gcid:millwork_shop",
    displayName: "Mill-work Shop",
  },
  {
    name: "categories/gcid:mine",
    displayName: "Mine",
  },
  {
    name: "categories/gcid:mineral_supplier",
    displayName: "Mineral Supplier",
  },
  {
    name: "categories/gcid:mineral_water_company",
    displayName: "Mineral water company",
  },
  {
    name: "categories/gcid:mineral_water_wholesale",
    displayName: "Mineral water wholesaler",
  },
  {
    name: "categories/gcid:mini_dealer",
    displayName: "MINI dealer",
  },
  {
    name: "categories/gcid:miniature_golf_course",
    displayName: "Miniature golf course",
  },
  {
    name: "categories/gcid:miniatures_store",
    displayName: "Miniatures Shop",
  },
  {
    name: "categories/gcid:minibus_taxi_service",
    displayName: "Minibus taxi service",
  },
  {
    name: "categories/gcid:mining_company",
    displayName: "Mining company",
  },
  {
    name: "categories/gcid:mining_consultant",
    displayName: "Mining consultant",
  },
  {
    name: "categories/gcid:mining_engineer",
    displayName: "Mining engineer",
  },
  {
    name: "categories/gcid:mining_equipment",
    displayName: "Mining equipment",
  },
  {
    name: "categories/gcid:ministry_of_education",
    displayName: "Ministry of Education",
  },
  {
    name: "categories/gcid:mirror_shop",
    displayName: "Mirror shop",
  },
  {
    name: "categories/gcid:miso_cutlet_restaurant",
    displayName: "Miso cutlet restaurant",
  },
  {
    name: "categories/gcid:missing_persons_organization",
    displayName: "Missing Persons Organization",
  },
  {
    name: "categories/gcid:mission",
    displayName: "Mission",
  },
  {
    name: "categories/gcid:mitsubishi_dealer",
    displayName: "Mitsubishi dealer",
  },
  {
    name: "categories/gcid:mobile_catering",
    displayName: "Mobile caterer",
  },
  {
    name: "categories/gcid:mobile_disco",
    displayName: "Mobile disco",
  },
  {
    name: "categories/gcid:mobile_hairdresser",
    displayName: "Mobile hairdresser",
  },
  {
    name: "categories/gcid:mobile_home_dealer",
    displayName: "Mobile home dealer",
  },
  {
    name: "categories/gcid:mobile_home_park",
    displayName: "Mobile Home Park",
  },
  {
    name: "categories/gcid:mobile_home_rental_agency",
    displayName: "Mobile home rental agency",
  },
  {
    name: "categories/gcid:mobile_home_supply_store",
    displayName: "Mobile Home Supply Shop",
  },
  {
    name: "categories/gcid:mobile_money_agent",
    displayName: "Mobile money agent",
  },
  {
    name: "categories/gcid:mobile_network_operator",
    displayName: "Mobile network operator",
  },
  {
    name: "categories/gcid:mobile_phone_repair_shop",
    displayName: "Mobile phone repair shop",
  },
  {
    name: "categories/gcid:mobility_equipment_supplier",
    displayName: "Mobility equipment supplier",
  },
  {
    name: "categories/gcid:model_car_play_area",
    displayName: "Model car play area",
  },
  {
    name: "categories/gcid:model_design_company",
    displayName: "Model design company",
  },
  {
    name: "categories/gcid:model_portfolio_studio",
    displayName: "Model portfolio studio",
  },
  {
    name: "categories/gcid:model_train_store",
    displayName: "Model Train Shop",
  },
  {
    name: "categories/gcid:modeling_agency",
    displayName: "Modelling agency",
  },
  {
    name: "categories/gcid:modeling_school",
    displayName: "Modelling School",
  },
  {
    name: "categories/gcid:modern_art_museum",
    displayName: "Modern art museum",
  },
  {
    name: "categories/gcid:modern_british_restaurant",
    displayName: "Modern British restaurant",
  },
  {
    name: "categories/gcid:modern_european_restaurant",
    displayName: "Modern European restaurant",
  },
  {
    name: "categories/gcid:modern_french_restaurant",
    displayName: "Modern French restaurant",
  },
  {
    name: "categories/gcid:modern_indian_restaurant",
    displayName: "Modern Indian restaurant",
  },
  {
    name: "categories/gcid:modular_home_builder",
    displayName: "Modular home builder",
  },
  {
    name: "categories/gcid:modular_home_dealer",
    displayName: "Modular home dealer",
  },
  {
    name: "categories/gcid:mold_maker",
    displayName: "Mold maker",
  },
  {
    name: "categories/gcid:molding_supplier",
    displayName: "Moulding Supplier",
  },
  {
    name: "categories/gcid:momo_restaurant",
    displayName: "Momo restaurant",
  },
  {
    name: "categories/gcid:monastery",
    displayName: "Monastery",
  },
  {
    name: "categories/gcid:money_order_service",
    displayName: "Money order service",
  },
  {
    name: "categories/gcid:money_transfer_service",
    displayName: "Money transfer service",
  },
  {
    name: "categories/gcid:mongolian_barbecue_restaurant",
    displayName: "Mongolian barbecue restaurant",
  },
  {
    name: "categories/gcid:monja_restaurant",
    displayName: "Monjayaki restaurant",
  },
  {
    name: "categories/gcid:monogramming_service",
    displayName: "Monogramming service",
  },
  {
    name: "categories/gcid:montessori_school",
    displayName: "Montessori school",
  },
  {
    name: "categories/gcid:monument_maker",
    displayName: "Monument maker",
  },
  {
    name: "categories/gcid:moped_dealer",
    displayName: "Moped dealer",
  },
  {
    name: "categories/gcid:moravian_church",
    displayName: "Moravian church",
  },
  {
    name: "categories/gcid:mordern_izakaya_restaurants",
    displayName: "Modern izakaya restaurant",
  },
  {
    name: "categories/gcid:moroccan_restaurant",
    displayName: "Moroccan restaurant",
  },
  {
    name: "categories/gcid:mortgage_broker",
    displayName: "Mortgage broker",
  },
  {
    name: "categories/gcid:mortgage_lender",
    displayName: "Mortgage lender",
  },
  {
    name: "categories/gcid:mortuary",
    displayName: "Mortuary",
  },
  {
    name: "categories/gcid:mosque",
    displayName: "Mosque",
  },
  {
    name: "categories/gcid:motel",
    displayName: "Motel",
  },
  {
    name: "categories/gcid:motor_scooter_dealer",
    displayName: "Motor scooter dealer",
  },
  {
    name: "categories/gcid:motor_scooter_repair_shop",
    displayName: "Motor scooter repair shop",
  },
  {
    name: "categories/gcid:motor_vehicle_dealer",
    displayName: "Motor vehicle dealer",
  },
  {
    name: "categories/gcid:motorcycle_dealer",
    displayName: "Two Wheeler Dealer",
  },
  {
    name: "categories/gcid:motorcycle_driving_school",
    displayName: "Motorcycle Driving School",
  },
  {
    name: "categories/gcid:motorcycle_insurance_agency",
    displayName: "Motorcycle Insurance Agency",
  },
  {
    name: "categories/gcid:motorcycle_parts_store",
    displayName: "Motorbike parts shop",
  },
  {
    name: "categories/gcid:motorcycle_rental_agency",
    displayName: "Two Wheeler Rental Agency",
  },
  {
    name: "categories/gcid:motorcycle_repair_shop",
    displayName: "Two Wheeler Repair Shop",
  },
  {
    name: "categories/gcid:motorcycle_shop",
    displayName: "Motorcycle shop",
  },
  {
    name: "categories/gcid:motoring_club",
    displayName: "Car Club",
  },
  {
    name: "categories/gcid:motorsports_store",
    displayName: "Motorsports Shop",
  },
  {
    name: "categories/gcid:mountain_cable_car",
    displayName: "Mountain cable car",
  },
  {
    name: "categories/gcid:mountain_hut",
    displayName: "Mountain cabin",
  },
  {
    name: "categories/gcid:mountaineering_class",
    displayName: "Mountaineering Class",
  },
  {
    name: "categories/gcid:movie_rental_kiosk",
    displayName: "Film Rental Kiosk",
  },
  {
    name: "categories/gcid:movie_rental_store",
    displayName: "Film Rental Store",
  },
  {
    name: "categories/gcid:movie_studio",
    displayName: "Movie studio",
  },
  {
    name: "categories/gcid:movie_theater",
    displayName: "Cinema",
  },
  {
    name: "categories/gcid:moving_and_storage_service",
    displayName: "Removals Service",
  },
  {
    name: "categories/gcid:moving_company",
    displayName: "Removals company",
  },
  {
    name: "categories/gcid:moving_supply_store",
    displayName: "Moving Supply Shop",
  },
  {
    name: "categories/gcid:mri_center",
    displayName: "MRI Centre",
  },
  {
    name: "categories/gcid:muay_thai_boxing_gym",
    displayName: "Muay Thai boxing gym",
  },
  {
    name: "categories/gcid:muffler_shop",
    displayName: "Exhaust Silencer Shop",
  },
  {
    name: "categories/gcid:mughlai_restaurant",
    displayName: "Mughlai restaurant",
  },
  {
    name: "categories/gcid:mulch_supplier",
    displayName: "Mulch supplier",
  },
  {
    name: "categories/gcid:multimedia_and_electronic_book_publisher",
    displayName: "Multimedia and electronic book publisher",
  },
  {
    name: "categories/gcid:municipal_administration_office",
    displayName: "Municipal administration office",
  },
  {
    name: "categories/gcid:municipal_corporation",
    displayName: "Municipal Corporation",
  },
  {
    name: "categories/gcid:municipal_department_agricultural_development",
    displayName: "Municipal Department Agricultural Development",
  },
  {
    name: "categories/gcid:municipal_department_agriculture_food_supply",
    displayName: "Municipal department of agriculture food supply",
  },
  {
    name: "categories/gcid:municipal_department_civil_defense",
    displayName: "Municipal Department Civil Defense",
  },
  {
    name: "categories/gcid:municipal_department_communication",
    displayName: "Municipal Department Communication",
  },
  {
    name: "categories/gcid:municipal_department_finance",
    displayName: "Municipal Department Finance",
  },
  {
    name: "categories/gcid:municipal_department_housing_and_urban_development",
    displayName: "Municipal Department Housing and Urban Development",
  },
  {
    name: "categories/gcid:municipal_department_of_culture",
    displayName: "Municipal Department of Culture",
  },
  {
    name: "categories/gcid:municipal_department_of_sports",
    displayName: "Municipal Department of Sports",
  },
  {
    name: "categories/gcid:municipal_department_of_tourism",
    displayName: "Municipal Department of Tourism",
  },
  {
    name: "categories/gcid:municipal_department_science_technology",
    displayName: "Municipal Department Science Technology",
  },
  {
    name: "categories/gcid:municipal_department_social_defense",
    displayName: "Municipal Department Social Defense",
  },
  {
    name: "categories/gcid:municipal_guard",
    displayName: "Municipal Guard",
  },
  {
    name: "categories/gcid:municipal_health_department",
    displayName: "Municipal health department",
  },
  {
    name: "categories/gcid:municipal_office_education",
    displayName: "Municipal office education",
  },
  {
    name: "categories/gcid:municipal_social_development",
    displayName: "Municipal Social Development",
  },
  {
    name: "categories/gcid:murtabak_restaurant",
    displayName: "Murtabak restaurant",
  },
  {
    name: "categories/gcid:musalla",
    displayName: "Musalla",
  },
  {
    name: "categories/gcid:museum",
    displayName: "Museum",
  },
  {
    name: "categories/gcid:museum_of_space_history",
    displayName: "Museum of space history",
  },
  {
    name: "categories/gcid:museum_of_zoology",
    displayName: "Museum of zoology",
  },
  {
    name: "categories/gcid:music_box_store",
    displayName: "Music Box Shop",
  },
  {
    name: "categories/gcid:music_college",
    displayName: "Music college",
  },
  {
    name: "categories/gcid:music_conservatory",
    displayName: "Music conservatory",
  },
  {
    name: "categories/gcid:music_instructor",
    displayName: "Music Teacher",
  },
  {
    name: "categories/gcid:music_management_and_promotion",
    displayName: "Music management and promotion",
  },
  {
    name: "categories/gcid:music_producer",
    displayName: "Music producer",
  },
  {
    name: "categories/gcid:music_publisher",
    displayName: "Music publisher",
  },
  {
    name: "categories/gcid:music_school",
    displayName: "Music school",
  },
  {
    name: "categories/gcid:music_store",
    displayName: "Music shop",
  },
  {
    name: "categories/gcid:musical_club",
    displayName: "Musical club",
  },
  {
    name: "categories/gcid:musical_instrument_manufacturer",
    displayName: "Musical instrument manufacturer",
  },
  {
    name: "categories/gcid:musical_instrument_rental_service",
    displayName: "Musical instrument rental service",
  },
  {
    name: "categories/gcid:musical_instrument_repair_shop",
    displayName: "Musical instrument repair shop",
  },
  {
    name: "categories/gcid:musical_instrument_store",
    displayName: "Musical Instrument Shop",
  },
  {
    name: "categories/gcid:musician",
    displayName: "Musician",
  },
  {
    name: "categories/gcid:mutton_barbecue_restaurant",
    displayName: "Mutton barbecue restaurant",
  },
  {
    name: "categories/gcid:nail_salon",
    displayName: "Nail salon",
  },
  {
    name: "categories/gcid:nanotechnology_engineer",
    displayName: "Nanotechnology Engineer",
  },
  {
    name: "categories/gcid:nasi_goreng_restaurant",
    displayName: "Nasi goreng restaurant",
  },
  {
    name: "categories/gcid:nasi_restaurant",
    displayName: "Nasi restaurant",
  },
  {
    name: "categories/gcid:nasi_uduk_restaurant",
    displayName: "Nasi uduk restaurant",
  },
  {
    name: "categories/gcid:national_forest",
    displayName: "National forest",
  },
  {
    name: "categories/gcid:national_health_foundation",
    displayName: "National health foundation",
  },
  {
    name: "categories/gcid:national_library",
    displayName: "National library",
  },
  {
    name: "categories/gcid:national_museum",
    displayName: "National museum",
  },
  {
    name: "categories/gcid:national_park",
    displayName: "National park",
  },
  {
    name: "categories/gcid:national_reserve",
    displayName: "National reserve",
  },
  {
    name: "categories/gcid:native_american_goods_store",
    displayName: "Native American Goods Shop",
  },
  {
    name: "categories/gcid:native_american_restaurant",
    displayName: "Native American restaurant",
  },
  {
    name: "categories/gcid:natural_foods_store",
    displayName: "Natural Foods Shop",
  },
  {
    name: "categories/gcid:natural_history_museum",
    displayName: "Natural history museum",
  },
  {
    name: "categories/gcid:natural_rock_climbing_area",
    displayName: "Natural rock climbing area",
  },
  {
    name: "categories/gcid:natural_stone_exporter",
    displayName: "Natural Stone Exporter",
  },
  {
    name: "categories/gcid:natural_stone_supplier",
    displayName: "Natural Stone Supplier",
  },
  {
    name: "categories/gcid:natural_stone_wholesaler",
    displayName: "Natural Stone Wholesaler",
  },
  {
    name: "categories/gcid:nature_preserve",
    displayName: "Nature reserve",
  },
  {
    name: "categories/gcid:naturopathic_practitioner",
    displayName: "Naturopath",
  },
  {
    name: "categories/gcid:naval_base",
    displayName: "Navy Base",
  },
  {
    name: "categories/gcid:navarraise_restaurant",
    displayName: "Navarraise restaurant",
  },
  {
    name: "categories/gcid:neapolitan_restaurant",
    displayName: "Neapolitan restaurant",
  },
  {
    name: "categories/gcid:needlework_shop",
    displayName: "Needlework shop",
  },
  {
    name: "categories/gcid:neon_sign_shop",
    displayName: "Neon sign shop",
  },
  {
    name: "categories/gcid:neonatal_physician",
    displayName: "Neonatal Doctor",
  },
  {
    name: "categories/gcid:nepalese_restaurant",
    displayName: "Nepalese restaurant",
  },
  {
    name: "categories/gcid:nephrologist",
    displayName: "Nephrologist",
  },
  {
    name: "categories/gcid:netball_club",
    displayName: "Netball club",
  },
  {
    name: "categories/gcid:neurologist",
    displayName: "Neurologist",
  },
  {
    name: "categories/gcid:neurophysiologist",
    displayName: "Neurophysiologist",
  },
  {
    name: "categories/gcid:neurosurgeon",
    displayName: "Neurosurgeon",
  },
  {
    name: "categories/gcid:new_age_church",
    displayName: "New Age church",
  },
  {
    name: "categories/gcid:new_england_restaurant",
    displayName: "New England restaurant",
  },
  {
    name: "categories/gcid:new_us_american_restaurant",
    displayName: "New American restaurant",
  },
  {
    name: "categories/gcid:new_years_tree_market",
    displayName: "New Years tree market",
  },
  {
    name: "categories/gcid:new_zealand_restaurant",
    displayName: "New Zealand restaurant",
  },
  {
    name: "categories/gcid:news_service",
    displayName: "New Service",
  },
  {
    name: "categories/gcid:newspaper_advertising_department",
    displayName: "Newspaper advertising department",
  },
  {
    name: "categories/gcid:newspaper_distribution",
    displayName: "Newspaper distribution",
  },
  {
    name: "categories/gcid:newspaper_publisher",
    displayName: "Newspaper publisher",
  },
  {
    name: "categories/gcid:newsstand",
    displayName: "Newsstand",
  },
  {
    name: "categories/gcid:nicaraguan_restaurant",
    displayName: "Nicaraguan restaurant",
  },
  {
    name: "categories/gcid:night_club",
    displayName: "Nightclub",
  },
  {
    name: "categories/gcid:night_market",
    displayName: "Night market",
  },
  {
    name: "categories/gcid:nissan_dealer",
    displayName: "Nissan dealer",
  },
  {
    name: "categories/gcid:non_denominational_church",
    displayName: "Non-denominational church",
  },
  {
    name: "categories/gcid:non_governmental_organization",
    displayName: "Non-Governmental Organisation",
  },
  {
    name: "categories/gcid:non_profit_organization",
    displayName: "Non-profit organisation",
  },
  {
    name: "categories/gcid:non_smoking_holiday_home",
    displayName: "Non smoking holiday home",
  },
  {
    name: "categories/gcid:non_vegetarian_restaurant",
    displayName: "Non Vegetarian Restaurant",
  },
  {
    name: "categories/gcid:noodle_shop",
    displayName: "Noodle shop",
  },
  {
    name: "categories/gcid:north_african_restaurant",
    displayName: "North African restaurant",
  },
  {
    name: "categories/gcid:north_eastern_indian_restaurant",
    displayName: "North Eastern Indian restaurant",
  },
  {
    name: "categories/gcid:north_indian_restaurant",
    displayName: "North Indian restaurant",
  },
  {
    name: "categories/gcid:northern_italian_restaurant",
    displayName: "Northern Italian restaurant",
  },
  {
    name: "categories/gcid:norwegian_restaurant",
    displayName: "Norwegian restaurant",
  },
  {
    name: "categories/gcid:notaries_association",
    displayName: "Notaries association",
  },
  {
    name: "categories/gcid:notary_public",
    displayName: "Notary public",
  },
  {
    name: "categories/gcid:notions_store",
    displayName: "Needlecraft shop",
  },
  {
    name: "categories/gcid:novelties_wholesaler",
    displayName: "Novelties Wholesaler",
  },
  {
    name: "categories/gcid:novelty_store",
    displayName: "Novelty shop",
  },
  {
    name: "categories/gcid:nuclear_engineer",
    displayName: "Nuclear Engineer",
  },
  {
    name: "categories/gcid:nuclear_power_company",
    displayName: "Nuclear Power Company",
  },
  {
    name: "categories/gcid:nuclear_power_plant",
    displayName: "Nuclear power plant",
  },
  {
    name: "categories/gcid:nudist_club",
    displayName: "Nudist club",
  },
  {
    name: "categories/gcid:nudist_park",
    displayName: "Nudist Resort",
  },
  {
    name: "categories/gcid:nuevo_latino_restaurant",
    displayName: "Nuevo Latino restaurant",
  },
  {
    name: "categories/gcid:numerologist",
    displayName: "Numerologist",
  },
  {
    name: "categories/gcid:nunnery",
    displayName: "Convent",
  },
  {
    name: "categories/gcid:nurse_practitioner",
    displayName: "Nurse practitioner",
  },
  {
    name: "categories/gcid:nursery_school",
    displayName: "Nursery school",
  },
  {
    name: "categories/gcid:nursing_agency",
    displayName: "Nursing agency",
  },
  {
    name: "categories/gcid:nursing_association",
    displayName: "Nursing association",
  },
  {
    name: "categories/gcid:nursing_home",
    displayName: "Nursing home",
  },
  {
    name: "categories/gcid:nursing_school",
    displayName: "Nursing college",
  },
  {
    name: "categories/gcid:nut_store",
    displayName: "Nut Shop",
  },
  {
    name: "categories/gcid:nutritionist",
    displayName: "Nutritionist",
  },
  {
    name: "categories/gcid:nyonya_restaurant",
    displayName: "Nyonya restaurant",
  },
  {
    name: "categories/gcid:oaxacan_restaurant",
    displayName: "Oaxacan restaurant",
  },
  {
    name: "categories/gcid:obanzai_cuisine",
    displayName: "Obanzai restaurant",
  },
  {
    name: "categories/gcid:observation_deck",
    displayName: "Observation deck",
  },
  {
    name: "categories/gcid:observatory",
    displayName: "Observatory",
  },
  {
    name: "categories/gcid:obstetrics_gynecology_clinic",
    displayName: "Women's health clinic",
  },
  {
    name: "categories/gcid:occupational_health_service",
    displayName: "Occupational health service",
  },
  {
    name: "categories/gcid:occupational_medical_physician",
    displayName: "Occupational Medical Doctor",
  },
  {
    name: "categories/gcid:occupational_safety_and_health",
    displayName: "Occupational safety and health",
  },
  {
    name: "categories/gcid:occupational_therapist",
    displayName: "Occupational therapist",
  },
  {
    name: "categories/gcid:oden_restaurant",
    displayName: "Oden restaurant",
  },
  {
    name: "categories/gcid:odia_restaurant",
    displayName: "Odia restaurant",
  },
  {
    name: "categories/gcid:off_road_race_track",
    displayName: "Off-road race track",
  },
  {
    name: "categories/gcid:off_roading_area",
    displayName: "Off-Road Area",
  },
  {
    name: "categories/gcid:off_track_betting_shop",
    displayName: "Off track betting shop",
  },
  {
    name: "categories/gcid:offal_pot_cooking",
    displayName: "Offal pot cooking restaurant",
  },
  {
    name: "categories/gcid:office_accessories_wholesaler",
    displayName: "Office Accessories Wholesaler",
  },
  {
    name: "categories/gcid:office_equipment_rental_service",
    displayName: "Office equipment rental company",
  },
  {
    name: "categories/gcid:office_equipment_repair_service",
    displayName: "Office equipment repair service",
  },
  {
    name: "categories/gcid:office_equipment_supplier",
    displayName: "Office equipment supplier",
  },
  {
    name: "categories/gcid:office_furniture_store",
    displayName: "Office Furniture Shop",
  },
  {
    name: "categories/gcid:office_of_vital_records",
    displayName: "Office of Vital Records",
  },
  {
    name: "categories/gcid:office_refurbishment_service",
    displayName: "Office refurbishment service",
  },
  {
    name: "categories/gcid:office_space_rental_agency",
    displayName: "Office rental agency",
  },
  {
    name: "categories/gcid:office_supply_store",
    displayName: "Office supplies shop",
  },
  {
    name: "categories/gcid:office_supply_wholesaler",
    displayName: "Office supply wholesaler",
  },
  {
    name: "categories/gcid:offset_printer",
    displayName: "Offset Printer",
  },
  {
    name: "categories/gcid:oil_and_gas_exploration_service",
    displayName: "Oil and gas exploration service",
  },
  {
    name: "categories/gcid:oil_change_service",
    displayName: "Oil change service",
  },
  {
    name: "categories/gcid:oil_company",
    displayName: "Oil & natural gas company",
  },
  {
    name: "categories/gcid:oil_field_equipment_supplier",
    displayName: "Oil field equipment supplier",
  },
  {
    name: "categories/gcid:oil_refinery",
    displayName: "Oil refinery",
  },
  {
    name: "categories/gcid:oil_store",
    displayName: "Oil Store",
  },
  {
    name: "categories/gcid:oil_wholesaler",
    displayName: "Oil Wholesaler",
  },
  {
    name: "categories/gcid:oilfield",
    displayName: "Oilfield",
  },
  {
    name: "categories/gcid:okonomiyaki_restaurant",
    displayName: "Okonomiyaki restaurant",
  },
  {
    name: "categories/gcid:oldsmobile_dealer",
    displayName: "Oldsmobile dealer",
  },
  {
    name: "categories/gcid:olive_oil_bottling_company",
    displayName: "Olive oil bottling company",
  },
  {
    name: "categories/gcid:olive_oil_cooperative",
    displayName: "Olive oil cooperative",
  },
  {
    name: "categories/gcid:olive_oil_manufacturer",
    displayName: "Olive Oil Producer",
  },
  {
    name: "categories/gcid:oncologist",
    displayName: "Oncologist",
  },
  {
    name: "categories/gcid:online_share_trading_center",
    displayName: "Online Share Trading Center",
  },
  {
    name: "categories/gcid:onsen",
    displayName: "Onsen",
  },
  {
    name: "categories/gcid:opel_dealer",
    displayName: "Vauxhall/Opel dealer",
  },
  {
    name: "categories/gcid:open_air_museum",
    displayName: "Open-Air Museum",
  },
  {
    name: "categories/gcid:open_university",
    displayName: "Open University",
  },
  {
    name: "categories/gcid:opera_company",
    displayName: "Opera company",
  },
  {
    name: "categories/gcid:opera_house",
    displayName: "Opera house",
  },
  {
    name: "categories/gcid:ophthalmologist",
    displayName: "Ophthalmologist",
  },
  {
    name: "categories/gcid:ophthalmology_clinic",
    displayName: "Ophthalmology Clinic",
  },
  {
    name: "categories/gcid:optical_instrument_repair_service",
    displayName: "Optical instrument repair service",
  },
  {
    name: "categories/gcid:optical_products_manufacturer",
    displayName: "Optical Products Manufacturer",
  },
  {
    name: "categories/gcid:optical_wholesaler",
    displayName: "Optical Wholesaler",
  },
  {
    name: "categories/gcid:optician",
    displayName: "Optician",
  },
  {
    name: "categories/gcid:optometrist",
    displayName: "Optometrist",
  },
  {
    name: "categories/gcid:oral_maxillofacial_surgeon",
    displayName: "Oral and maxillofacial surgeon",
  },
  {
    name: "categories/gcid:oral_surgeon",
    displayName: "Oral surgeon",
  },
  {
    name: "categories/gcid:orchard",
    displayName: "Orchard",
  },
  {
    name: "categories/gcid:orchestra",
    displayName: "Musical Band and Orchestra",
  },
  {
    name: "categories/gcid:orchid_farm",
    displayName: "Orchid farm",
  },
  {
    name: "categories/gcid:orchid_grower",
    displayName: "Orchid grower",
  },
  {
    name: "categories/gcid:organ_donation_and_tissue_bank",
    displayName: "Organ Donation & Tissue Bank",
  },
  {
    name: "categories/gcid:organic_drug_store",
    displayName: "Organic Pharmacy",
  },
  {
    name: "categories/gcid:organic_farm",
    displayName: "Organic farm",
  },
  {
    name: "categories/gcid:organic_food_store",
    displayName: "Organic Food Shop",
  },
  {
    name: "categories/gcid:organic_restaurant",
    displayName: "Organic restaurant",
  },
  {
    name: "categories/gcid:organic_store",
    displayName: "Organic shop",
  },
  {
    name: "categories/gcid:oriental_goods_store",
    displayName: "Oriental Goods Shop",
  },
  {
    name: "categories/gcid:oriental_medicine_clinic",
    displayName: "Oriental medicine clinic",
  },
  {
    name: "categories/gcid:oriental_medicine_store",
    displayName: "Oriental medicine store",
  },
  {
    name: "categories/gcid:oriental_rug_store",
    displayName: "Oriental Rug Shop",
  },
  {
    name: "categories/gcid:orphan_asylum",
    displayName: "Orphan asylum",
  },
  {
    name: "categories/gcid:orphanage",
    displayName: "Orphanage",
  },
  {
    name: "categories/gcid:orthodontist",
    displayName: "Orthodontist",
  },
  {
    name: "categories/gcid:orthodox_church",
    displayName: "Orthodox church",
  },
  {
    name: "categories/gcid:orthodox_synagogue",
    displayName: "Orthodox synagogue",
  },
  {
    name: "categories/gcid:orthopedic_clinic",
    displayName: "Orthopedic clinic",
  },
  {
    name: "categories/gcid:orthopedic_shoe_store",
    displayName: "Orthopaedic Shoe Shop",
  },
  {
    name: "categories/gcid:orthopedic_surgeon",
    displayName: "Orthopaedic surgeon",
  },
  {
    name: "categories/gcid:orthoptist",
    displayName: "Orthoptist",
  },
  {
    name: "categories/gcid:orthotics_and_prosthetics_service",
    displayName: "Orthotics & Prosthetics Centre",
  },
  {
    name: "categories/gcid:osteopath",
    displayName: "Osteopath",
  },
  {
    name: "categories/gcid:otolaryngologist",
    displayName: "ENT Specialist",
  },
  {
    name: "categories/gcid:otolaryngology_clinic",
    displayName: "Otolaryngology Clinic",
  },
  {
    name: "categories/gcid:outboard_motor_store",
    displayName: "Outboard Motor Shop",
  },
  {
    name: "categories/gcid:outdoor_activity_organizer",
    displayName: "Outdoor activity organiser",
  },
  {
    name: "categories/gcid:outdoor_bath",
    displayName: "Outdoor bath",
  },
  {
    name: "categories/gcid:outdoor_clothing_and_equipment_shop",
    displayName: "Outdoor clothing and equipment shop",
  },
  {
    name: "categories/gcid:outdoor_equestrian_facility",
    displayName: "Outdoor equestrian facility",
  },
  {
    name: "categories/gcid:outdoor_furniture_store",
    displayName: "Outdoor furniture shop",
  },
  {
    name: "categories/gcid:outdoor_movie_theatre",
    displayName: "Outdoor cinema",
  },
  {
    name: "categories/gcid:outdoor_sports_store",
    displayName: "Outdoor sports shop",
  },
  {
    name: "categories/gcid:outdoor_swimming_pool",
    displayName: "Outdoor Swimming Pool",
  },
  {
    name: "categories/gcid:outerwear_store",
    displayName: "Outerwear Shop",
  },
  {
    name: "categories/gcid:outlet_mall",
    displayName: "Shopping outlet",
  },
  {
    name: "categories/gcid:outlet_store",
    displayName: "Factory outlet shop",
  },
  {
    name: "categories/gcid:oxygen_cocktail_spot",
    displayName: "Oxygen cocktail spot",
  },
  {
    name: "categories/gcid:oxygen_equipment_supplier",
    displayName: "Oxygen equipment supplier",
  },
  {
    name: "categories/gcid:oyster_bar_restaurant",
    displayName: "Oyster bar restaurant",
  },
  {
    name: "categories/gcid:oyster_supplier",
    displayName: "Oyster supplier",
  },
  {
    name: "categories/gcid:paan_shop",
    displayName: "Paan shop",
  },
  {
    name: "categories/gcid:pachinko",
    displayName: "Pachinko Parlour",
  },
  {
    name: "categories/gcid:pacific_rim_restaurant",
    displayName: "Pacific Rim restaurant",
  },
  {
    name: "categories/gcid:package_locker",
    displayName: "Package locker",
  },
  {
    name: "categories/gcid:packaging_company",
    displayName: "Packaging company",
  },
  {
    name: "categories/gcid:packaging_machinery",
    displayName: "Packaging machinery",
  },
  {
    name: "categories/gcid:packaging_supply_store",
    displayName: "Packaging Supply Shop",
  },
  {
    name: "categories/gcid:padang_restaurant",
    displayName: "Padang restaurant",
  },
  {
    name: "categories/gcid:padel_club",
    displayName: "Padel club",
  },
  {
    name: "categories/gcid:padel_court",
    displayName: "Padel court",
  },
  {
    name: "categories/gcid:pagoda",
    displayName: "Pagoda",
  },
  {
    name: "categories/gcid:pain_control_clinic",
    displayName: "Pain control clinic",
  },
  {
    name: "categories/gcid:pain_management_physician",
    displayName: "Pain Management Doctor",
  },
  {
    name: "categories/gcid:paint_manufacturer",
    displayName: "Paint Manufacturer",
  },
  {
    name: "categories/gcid:paint_store",
    displayName: "Paint shop",
  },
  {
    name: "categories/gcid:paint_stripping_company",
    displayName: "Paint Stripping Company",
  },
  {
    name: "categories/gcid:paintball_center",
    displayName: "Paintball centre",
  },
  {
    name: "categories/gcid:paintball_store",
    displayName: "Paintball Shop",
  },
  {
    name: "categories/gcid:painter",
    displayName: "Painter and Decorator",
  },
  {
    name: "categories/gcid:painting",
    displayName: "Painting",
  },
  {
    name: "categories/gcid:painting_lessons",
    displayName: "Painting Class",
  },
  {
    name: "categories/gcid:painting_studio",
    displayName: "Painting studio",
  },
  {
    name: "categories/gcid:paintings_store",
    displayName: "Paintings store",
  },
  {
    name: "categories/gcid:paisa_restaurant",
    displayName: "Paisa restaurant",
  },
  {
    name: "categories/gcid:pakistani_restaurant",
    displayName: "Pakistani restaurant",
  },
  {
    name: "categories/gcid:palatine_restaurant",
    displayName: "Palatine restaurant",
  },
  {
    name: "categories/gcid:pallet_supplier",
    displayName: "Pallet supplier",
  },
  {
    name: "categories/gcid:pan_asian_restaurant",
    displayName: "Pan-Asian restaurant",
  },
  {
    name: "categories/gcid:pan_latin_restaurant",
    displayName: "Pan-Latin restaurant",
  },
  {
    name: "categories/gcid:pancake_house",
    displayName: "Pancake restaurant",
  },
  {
    name: "categories/gcid:panipuri_shop",
    displayName: "Panipuri shop",
  },
  {
    name: "categories/gcid:paper_bag_supplier",
    displayName: "Paper bag supplier",
  },
  {
    name: "categories/gcid:paper_distributor",
    displayName: "Paper Distributor",
  },
  {
    name: "categories/gcid:paper_exporter",
    displayName: "Paper Exporter",
  },
  {
    name: "categories/gcid:paper_mill",
    displayName: "Paper mill",
  },
  {
    name: "categories/gcid:paper_shredding_machine_supplier",
    displayName: "Paper shredding machine supplier",
  },
  {
    name: "categories/gcid:paper_store",
    displayName: "Paper Shop",
  },
  {
    name: "categories/gcid:paraguayan_restaurant",
    displayName: "Paraguayan restaurant",
  },
  {
    name: "categories/gcid:paralegal_services_provider",
    displayName: "Paralegal services provider",
  },
  {
    name: "categories/gcid:parapharmacy",
    displayName: "Parapharmacy",
  },
  {
    name: "categories/gcid:parasailing_ride_service",
    displayName: "Parasailing ride service",
  },
  {
    name: "categories/gcid:parish",
    displayName: "Parish",
  },
  {
    name: "categories/gcid:park",
    displayName: "Park and Garden",
  },
  {
    name: "categories/gcid:park_and_ride",
    displayName: "Park and Ride",
  },
  {
    name: "categories/gcid:parking_garage",
    displayName: "Garage",
  },
  {
    name: "categories/gcid:parking_lot",
    displayName: "Car Park",
  },
  {
    name: "categories/gcid:parking_lot_for_bicycles",
    displayName: "Parking area for bicycles",
  },
  {
    name: "categories/gcid:parking_lot_for_motorcycle",
    displayName: "Parking area for motorcycles",
  },
  {
    name: "categories/gcid:parkour_spot",
    displayName: "Parkour spot",
  },
  {
    name: "categories/gcid:parochial_school",
    displayName: "Parochial school",
  },
  {
    name: "categories/gcid:parsi_restaurant",
    displayName: "Parsi restaurant",
  },
  {
    name: "categories/gcid:parsi_temple",
    displayName: "Parsi temple",
  },
  {
    name: "categories/gcid:part_time_daycare",
    displayName: "Part time daycare",
  },
  {
    name: "categories/gcid:party_equipment_rental_service",
    displayName: "Party equipment rental service",
  },
  {
    name: "categories/gcid:party_planner",
    displayName: "Party planner",
  },
  {
    name: "categories/gcid:party_store",
    displayName: "Party shop",
  },
  {
    name: "categories/gcid:passport_agent",
    displayName: "Passport Agent",
  },
  {
    name: "categories/gcid:passport_office",
    displayName: "Passport office",
  },
  {
    name: "categories/gcid:passport_photo_processor",
    displayName: "Passport Photo Processor",
  },
  {
    name: "categories/gcid:pasta_shop",
    displayName: "Pasta shop",
  },
  {
    name: "categories/gcid:pastry_shop",
    displayName: "Pastry shop",
  },
  {
    name: "categories/gcid:patent_attorney",
    displayName: "Patent Lawyer",
  },
  {
    name: "categories/gcid:patent_office",
    displayName: "Patent office",
  },
  {
    name: "categories/gcid:paternity_testing_service",
    displayName: "Paternity testing service",
  },
  {
    name: "categories/gcid:pathologist",
    displayName: "Pathologist",
  },
  {
    name: "categories/gcid:patients_support_association",
    displayName: "Patients support association",
  },
  {
    name: "categories/gcid:patio_enclosure_supplier",
    displayName: "Patio enclosure supplier",
  },
  {
    name: "categories/gcid:patisserie",
    displayName: "Patisserie",
  },
  {
    name: "categories/gcid:paving_contractor",
    displayName: "Paving contractor",
  },
  {
    name: "categories/gcid:paving_materials_supplier",
    displayName: "Paving materials supplier",
  },
  {
    name: "categories/gcid:pawn_shop",
    displayName: "Pawn shop",
  },
  {
    name: "categories/gcid:pay_by_weight_restaurant",
    displayName: "Pay by weight restaurant",
  },
  {
    name: "categories/gcid:payroll_service",
    displayName: "Payroll Service Provider",
  },
  {
    name: "categories/gcid:pecel_lele_restaurant",
    displayName: "Pecel lele restaurant",
  },
  {
    name: "categories/gcid:pedestrian_zone",
    displayName: "Pedestrian zone",
  },
  {
    name: "categories/gcid:pediatric_cardiologist",
    displayName: "Paediatric Cardiologist",
  },
  {
    name: "categories/gcid:pediatric_clinic",
    displayName: "Children's Clinic",
  },
  {
    name: "categories/gcid:pediatric_dentist",
    displayName: "Paediatric Dentist",
  },
  {
    name: "categories/gcid:pediatric_dermatologist",
    displayName: "Pediatric dermatologist",
  },
  {
    name: "categories/gcid:pediatric_endocrinologist",
    displayName: "Pediatric endocrinologist",
  },
  {
    name: "categories/gcid:pediatric_gastroenterologist",
    displayName: "Pediatric gastroenterologist",
  },
  {
    name: "categories/gcid:pediatric_hematologist",
    displayName: "Pediatric hematologist",
  },
  {
    name: "categories/gcid:pediatric_nephrologist",
    displayName: "Pediatric nephrologist",
  },
  {
    name: "categories/gcid:pediatric_neurologist",
    displayName: "Pediatric neurologist",
  },
  {
    name: "categories/gcid:pediatric_oncologist",
    displayName: "Pediatric oncologist",
  },
  {
    name: "categories/gcid:pediatric_ophthalmologist",
    displayName: "Paediatric Ophthalmologist",
  },
  {
    name: "categories/gcid:pediatric_orthopedic_surgeon",
    displayName: "Pediatric orthopedic surgeon",
  },
  {
    name: "categories/gcid:pediatric_pulmonologist",
    displayName: "Pediatric pulmonologist",
  },
  {
    name: "categories/gcid:pediatric_rheumatologist",
    displayName: "Pediatric rheumatologist",
  },
  {
    name: "categories/gcid:pediatric_surgeon",
    displayName: "Pediatric surgeon",
  },
  {
    name: "categories/gcid:pediatric_urologist",
    displayName: "Pediatric urologist",
  },
  {
    name: "categories/gcid:pediatrician",
    displayName: "Pediatrician",
  },
  {
    name: "categories/gcid:pedorthist",
    displayName: "Pedorthist",
  },
  {
    name: "categories/gcid:pempek_restaurant",
    displayName: "Pempek restaurant",
  },

  {
    name: "categories/gcid:pennsylvania_dutch_restaurant",
    displayName: "Pennsylvania Dutch restaurant",
  },
  {
    name: "categories/gcid:pension_office",
    displayName: "Pension office",
  },
  {
    name: "categories/gcid:pentecostal_church",
    displayName: "Pentecostal church",
  },
  {
    name: "categories/gcid:performing_arts_group",
    displayName: "Performing arts group",
  },
  {
    name: "categories/gcid:performing_arts_theater",
    displayName: "Performing arts theatre",
  },
  {
    name: "categories/gcid:perfume_exporter",
    displayName: "Perfume Exporter",
  },
  {
    name: "categories/gcid:perfume_store",
    displayName: "Perfume store",
  },
  {
    name: "categories/gcid:perinatal_center",
    displayName: "Perinatal center",
  },
  {
    name: "categories/gcid:periodontist",
    displayName: "Periodontist",
  },
  {
    name: "categories/gcid:permanent_make_up_clinic",
    displayName: "Permanent make-up clinic",
  },
  {
    name: "categories/gcid:persian_restaurant",
    displayName: "Persian restaurant",
  },
  {
    name: "categories/gcid:personal_chef_service",
    displayName: "Personal chef service",
  },
  {
    name: "categories/gcid:personal_injury_lawyer",
    displayName: "Personal Injury Lawyer",
  },
  {
    name: "categories/gcid:personal_trainer",
    displayName: "Personal trainer",
  },
  {
    name: "categories/gcid:personal_watercraft_dealer",
    displayName: "Personal watercraft dealer",
  },
  {
    name: "categories/gcid:peruvian_restaurant",
    displayName: "Peruvian restaurant",
  },
  {
    name: "categories/gcid:pest_control_service",
    displayName: "Pest control service",
  },
  {
    name: "categories/gcid:pet_adoption_service",
    displayName: "Pet adoption service",
  },
  {
    name: "categories/gcid:pet_boarding_service",
    displayName: "Pet boarding service",
  },
  {
    name: "categories/gcid:pet_cemetery",
    displayName: "Pet cemetery",
  },
  {
    name: "categories/gcid:pet_funeral_services",
    displayName: "Pet funeral service",
  },
  {
    name: "categories/gcid:pet_groomer",
    displayName: "Pet groomer",
  },
  {
    name: "categories/gcid:pet_moving_service",
    displayName: "Pet Moving Service",
  },
  {
    name: "categories/gcid:pet_sitter",
    displayName: "Pet sitter",
  },
  {
    name: "categories/gcid:pet_store",
    displayName: "Pet Shop",
  },
  {
    name: "categories/gcid:pet_supply_store",
    displayName: "Pet Care Store",
  },
  {
    name: "categories/gcid:pet_trainer",
    displayName: "Pet trainer",
  },
  {
    name: "categories/gcid:petrochemical_engineer",
    displayName: "Petrochemical Engineer",
  },
  {
    name: "categories/gcid:petroleum_products_company",
    displayName: "Petroleum Products Company",
  },
  {
    name: "categories/gcid:peugeot_dealer",
    displayName: "Peugeot dealer",
  },
  {
    name: "categories/gcid:pharmaceutical_company",
    displayName: "Pharmaceutical company",
  },
  {
    name: "categories/gcid:pharmaceutical_lab",
    displayName: "Pharmaceutical lab",
  },
  {
    name: "categories/gcid:pharmaceutical_products_wholesaler",
    displayName: "Pharmaceutical Products Wholesaler",
  },
  {
    name: "categories/gcid:pharmacy",
    displayName: "Pharmacy",
  },
  {
    name: "categories/gcid:philharmonic_hall",
    displayName: "Philharmonic hall",
  },
  {
    name: "categories/gcid:pho_restaurant",
    displayName: "Pho restaurant",
  },
  {
    name: "categories/gcid:phone_repair_service",
    displayName: "Phone repair service",
  },
  {
    name: "categories/gcid:photo_agency",
    displayName: "Photo agency",
  },
  {
    name: "categories/gcid:photo_booth",
    displayName: "Photo booth",
  },
  {
    name: "categories/gcid:photo_lab",
    displayName: "Photo lab",
  },
  {
    name: "categories/gcid:photo_restoration_service",
    displayName: "Photo Restoration Shop",
  },
  {
    name: "categories/gcid:photo_shop",
    displayName: "Photography shop",
  },
  {
    name: "categories/gcid:photocopiers_supplier",
    displayName: "Photocopier Supplier",
  },
  {
    name: "categories/gcid:photographer",
    displayName: "Photographer",
  },
  {
    name: "categories/gcid:photography_class",
    displayName: "Photography Class",
  },
  {
    name: "categories/gcid:photography_school",
    displayName: "Photography Institute",
  },
  {
    name: "categories/gcid:photography_service",
    displayName: "Photography service",
  },
  {
    name: "categories/gcid:photography_studio",
    displayName: "Photography studio",
  },
  {
    name: "categories/gcid:physiatrist",
    displayName: "Physiatrist",
  },
  {
    name: "categories/gcid:physical_examination_center",
    displayName: "Physical Examination Centre",
  },
  {
    name: "categories/gcid:physical_fitness_program",
    displayName: "Physical Fitness Programme",
  },
  {
    name: "categories/gcid:physician_assistant",
    displayName: "Physician assistant",
  },
  {
    name: "categories/gcid:physician_referral_service",
    displayName: "Doctor referral service",
  },
  {
    name: "categories/gcid:physiotherapist",
    displayName: "Physiotherapist",
  },
  {
    name: "categories/gcid:physiotherapy_center",
    displayName: "Physiotherapy Center",
  },
  {
    name: "categories/gcid:physiotherapy_equip_supplier",
    displayName: "Physiotherapy equipment supplier",
  },
  {
    name: "categories/gcid:piadina_restaurant",
    displayName: "Piadina restaurant",
  },
  {
    name: "categories/gcid:piano_bar",
    displayName: "Piano bar",
  },
  {
    name: "categories/gcid:piano_instructor",
    displayName: "Piano instructor",
  },
  {
    name: "categories/gcid:piano_maker",
    displayName: "Piano maker",
  },
  {
    name: "categories/gcid:piano_moving_service",
    displayName: "Piano moving service",
  },
  {
    name: "categories/gcid:piano_repair_service",
    displayName: "Piano repair service",
  },
  {
    name: "categories/gcid:piano_store",
    displayName: "Piano Shop",
  },
  {
    name: "categories/gcid:piano_tuning_service",
    displayName: "Piano tuner",
  },
  {
    name: "categories/gcid:pick_your_own_farm_produce",
    displayName: "Pick your own farm produce",
  },
  {
    name: "categories/gcid:pickleball_court",
    displayName: "Pickleball court",
  },
  {
    name: "categories/gcid:picnic_ground",
    displayName: "Picnic ground",
  },
  {
    name: "categories/gcid:picture_frame_shop",
    displayName: "Picture framing shop",
  },
  {
    name: "categories/gcid:pie_shop",
    displayName: "Pie shop",
  },
  {
    name: "categories/gcid:piedmontese_restaurant",
    displayName: "Piedmontese restaurant",
  },
  {
    name: "categories/gcid:pig_farm",
    displayName: "Pig farm",
  },
  {
    name: "categories/gcid:pilaf_restaurant",
    displayName: "Pilaf restaurant",
  },
  {
    name: "categories/gcid:pilates_studio",
    displayName: "Pilates studio",
  },
  {
    name: "categories/gcid:pile_driver",
    displayName: "Pile driving service",
  },
  {
    name: "categories/gcid:pilgrimages_place",
    displayName: "Pilgrimage place",
  },
  {
    name: "categories/gcid:pinatas_supplier",
    displayName: "Piñatas supplier",
  },
  {
    name: "categories/gcid:pinball_machine_supplier",
    displayName: "Pinball machine supplier",
  },
  {
    name: "categories/gcid:pine_furniture_shop",
    displayName: "Pine furniture shop",
  },
  {
    name: "categories/gcid:pipe_manufacturer",
    displayName: "Pipe Manufacturer",
  },
  {
    name: "categories/gcid:pipe_supplier",
    displayName: "Pipe supplier",
  },
  {
    name: "categories/gcid:pipes_wholesaler",
    displayName: "Pipes Wholesaler",
  },
  {
    name: "categories/gcid:pizza_delivery_service",
    displayName: "Pizza delivery",
  },
  {
    name: "categories/gcid:pizza_restaurant",
    displayName: "Pizza restaurant",
  },
  {
    name: "categories/gcid:pizzatakeaway",
    displayName: "Pizza Takeaway",
  },
  {
    name: "categories/gcid:place_of_worship",
    displayName: "Place of worship",
  },
  {
    name: "categories/gcid:planetarium",
    displayName: "Planetarium",
  },
  {
    name: "categories/gcid:plant_and_machinery_hire",
    displayName: "Plant and machinery hire",
  },
  {
    name: "categories/gcid:plant_nursery",
    displayName: "Nursery",
  },
  {
    name: "categories/gcid:plast_window_store",
    displayName: "Plast Window Shop",
  },
  {
    name: "categories/gcid:plaster_contractor",
    displayName: "Plasterer",
  },
  {
    name: "categories/gcid:plastic_bag_supplier",
    displayName: "Plastic bag supplier",
  },
  {
    name: "categories/gcid:plastic_bags_wholesaler",
    displayName: "Plastic Bags Wholesaler",
  },
  {
    name: "categories/gcid:plastic_fabrication_company",
    displayName: "Plastic fabrication company",
  },
  {
    name: "categories/gcid:plastic_injection_molding_service",
    displayName: "Plastic Injection Molding Workshop",
  },
  {
    name: "categories/gcid:plastic_products_supplier",
    displayName: "Plastic Products Supplier",
  },
  {
    name: "categories/gcid:plastic_resin_manufacturer",
    displayName: "Plastic Resin Manufacturer",
  },
  {
    name: "categories/gcid:plastic_surgeon",
    displayName: "Plastic surgeon",
  },
  {
    name: "categories/gcid:plastic_surgery_clinic",
    displayName: "Plastic surgery clinic",
  },
  {
    name: "categories/gcid:plastic_wholesaler",
    displayName: "Plastic Wholesaler",
  },
  {
    name: "categories/gcid:plating_service",
    displayName: "Electroplating Service",
  },
  {
    name: "categories/gcid:play_school",
    displayName: "Play School",
  },
  {
    name: "categories/gcid:playground",
    displayName: "Playground",
  },
  {
    name: "categories/gcid:playground_equipment_supplier",
    displayName: "Playground equipment supplier",
  },
  {
    name: "categories/gcid:playgroup",
    displayName: "Playgroup",
  },
  {
    name: "categories/gcid:plumber",
    displayName: "Plumber",
  },
  {
    name: "categories/gcid:plumbing_supply_store",
    displayName: "Plumbers' merchant",
  },
  {
    name: "categories/gcid:plus_size_clothing_store",
    displayName: "Plus Size Clothing Store",
  },
  {
    name: "categories/gcid:plywood_supplier",
    displayName: "Plywood supplier",
  },
  {
    name: "categories/gcid:pneumatic_tools_supplier",
    displayName: "Pneumatic tools supplier",
  },
  {
    name: "categories/gcid:po_boys_restaurant",
    displayName: "Po' boy restaurant",
  },
  {
    name: "categories/gcid:podiatrist",
    displayName: "Chiropodist",
  },
  {
    name: "categories/gcid:poke_bar",
    displayName: "Poke bar",
  },
  {
    name: "categories/gcid:police_academy",
    displayName: "Police academy",
  },
  {
    name: "categories/gcid:police_officers_housing",
    displayName: "Police officers' housing",
  },
  {
    name: "categories/gcid:police_supply_store",
    displayName: "Police Supply Shop",
  },
  {
    name: "categories/gcid:polish_restaurant",
    displayName: "Polish restaurant",
  },
  {
    name: "categories/gcid:political_party",
    displayName: "Political party office",
  },
  {
    name: "categories/gcid:polo_club",
    displayName: "Polo Club",
  },
  {
    name: "categories/gcid:polygraph_service",
    displayName: "Polygraph service",
  },
  {
    name: "categories/gcid:polymer_supplier",
    displayName: "Polymer Supplier",
  },
  {
    name: "categories/gcid:polynesian_restaurant",
    displayName: "Polynesian restaurant",
  },
  {
    name: "categories/gcid:polytechnic_school",
    displayName: "Polytechnic College",
  },
  {
    name: "categories/gcid:polythene_and_plastic_sheeting_supplier",
    displayName: "Polythene and plastic sheeting supplier",
  },
  {
    name: "categories/gcid:pond_contractor",
    displayName: "Pond contractor",
  },
  {
    name: "categories/gcid:pond_fish_supplier",
    displayName: "Pond fish supplier",
  },
  {
    name: "categories/gcid:pond_supply_store",
    displayName: "Pond Supply Shop",
  },
  {
    name: "categories/gcid:pontiac_dealer",
    displayName: "Pontiac dealer",
  },
  {
    name: "categories/gcid:pony_club",
    displayName: "Pony club",
  },
  {
    name: "categories/gcid:pony_ride_service",
    displayName: "Pony ride service",
  },
  {
    name: "categories/gcid:pool_academy",
    displayName: "Cue sports school",
  },
  {
    name: "categories/gcid:pool_billard_club",
    displayName: "Pool billard club",
  },
  {
    name: "categories/gcid:pool_cleaning_service",
    displayName: "Pool cleaning service",
  },
  {
    name: "categories/gcid:pool_hall",
    displayName: "Snooker and Pool Club",
  },
  {
    name: "categories/gcid:popcorn_store",
    displayName: "Popcorn Shop",
  },
  {
    name: "categories/gcid:pork_cutlet_rice_bowl_restaurant",
    displayName: "Katsudon restaurant",
  },
  {
    name: "categories/gcid:porridge_restaurant",
    displayName: "Porridge restaurant",
  },
  {
    name: "categories/gcid:porsche_dealer",
    displayName: "Porsche dealer",
  },
  {
    name: "categories/gcid:port_authority",
    displayName: "Port authority",
  },
  {
    name: "categories/gcid:port_operating_company",
    displayName: "Port operating company",
  },
  {
    name: "categories/gcid:portable_building_manufacturer",
    displayName: "Portable building manufacturer",
  },
  {
    name: "categories/gcid:portable_toilet_supplier",
    displayName: "Portable toilet supplier",
  },
  {
    name: "categories/gcid:portrait_studio",
    displayName: "Portrait studio",
  },
  {
    name: "categories/gcid:portuguese_restaurant",
    displayName: "Portuguese restaurant",
  },
  {
    name: "categories/gcid:post_office",
    displayName: "Post Office",
  },
  {
    name: "categories/gcid:poster_store",
    displayName: "Poster Shop",
  },
  {
    name: "categories/gcid:pottery_classes",
    displayName: "Pottery Class",
  },
  {
    name: "categories/gcid:pottery_manufacturer",
    displayName: "Pottery manufacturer",
  },
  {
    name: "categories/gcid:pottery_store",
    displayName: "Pottery shop",
  },
  {
    name: "categories/gcid:poultry_farm",
    displayName: "Poultry farm",
  },
  {
    name: "categories/gcid:poultry_store",
    displayName: "Poultry Shop",
  },
  {
    name: "categories/gcid:powder_coating_service",
    displayName: "Powder coating service",
  },
  {
    name: "categories/gcid:power_plant",
    displayName: "Power station",
  },
  {
    name: "categories/gcid:power_plant_consultant",
    displayName: "Power plant consultant",
  },
  {
    name: "categories/gcid:power_plant_equipment_supplier",
    displayName: "Power Station Equipment Supplier",
  },
  {
    name: "categories/gcid:powersports_vehicle_dealer",
    displayName: "Powersports vehicle dealer",
  },
  {
    name: "categories/gcid:pozole_restaurant",
    displayName: "Pozole restaurant",
  },
  {
    name: "categories/gcid:prawn_fishing",
    displayName: "Prawn Fishing",
  },
  {
    name: "categories/gcid:pre_gymnasium_school",
    displayName: "Pre gymnasium school",
  },
  {
    name: "categories/gcid:precision_engineer",
    displayName: "Precision engineer",
  },
  {
    name: "categories/gcid:prefabricated_house_companies",
    displayName: "Prefabricated house companies",
  },
  {
    name: "categories/gcid:prefecture",
    displayName: "Prefecture",
  },
  {
    name: "categories/gcid:prefecture_government_office",
    displayName: "Japanese prefecture government office",
  },
  {
    name: "categories/gcid:pregnancy_care_center",
    displayName: "Pregnancy Care Centre",
  },
  {
    name: "categories/gcid:prepaid_sim_card_store",
    displayName: "Prepaid Sim Card Store",
  },
  {
    name: "categories/gcid:preparatory_school",
    displayName: "Preparatory school",
  },
  {
    name: "categories/gcid:presbyterian_church",
    displayName: "Presbyterian church",
  },
  {
    name: "categories/gcid:preschool",
    displayName: "Pre-school",
  },
  {
    name: "categories/gcid:press_advisory",
    displayName: "Press advisory",
  },
  {
    name: "categories/gcid:pressure_washing_service",
    displayName: "Pressure washing service",
  },
  {
    name: "categories/gcid:pretzel_store",
    displayName: "Pretzel Shop",
  },
  {
    name: "categories/gcid:priest",
    displayName: "Priest",
  },
  {
    name: "categories/gcid:primary_school",
    displayName: "Primary school",
  },
  {
    name: "categories/gcid:print_shop",
    displayName: "Printing shop",
  },
  {
    name: "categories/gcid:printed_music_publisher",
    displayName: "Printed music publisher",
  },
  {
    name: "categories/gcid:printer_ink_refill_store",
    displayName: "Printer Ink Refill Shop",
  },
  {
    name: "categories/gcid:printer_repair_service",
    displayName: "Printer repair service",
  },
  {
    name: "categories/gcid:printing_equipment_and_supplies",
    displayName: "Printing equipment and supplies",
  },
  {
    name: "categories/gcid:printing_equipment_supplier",
    displayName: "Printing Equipment Supplier",
  },
  {
    name: "categories/gcid:prison",
    displayName: "Prison",
  },
  {
    name: "categories/gcid:private_college",
    displayName: "Private College",
  },
  {
    name: "categories/gcid:private_equity_firm",
    displayName: "Private equity firm",
  },
  {
    name: "categories/gcid:private_golf_course",
    displayName: "Private golf course",
  },
  {
    name: "categories/gcid:private_guest_room",
    displayName: "Home Stay",
  },
  {
    name: "categories/gcid:private_hospital",
    displayName: "Private hospital",
  },
  {
    name: "categories/gcid:private_investigator",
    displayName: "Private investigator",
  },
  {
    name: "categories/gcid:private_school",
    displayName: "Independent school",
  },
  {
    name: "categories/gcid:private_sector_bank",
    displayName: "Private Sector Bank",
  },
  {
    name: "categories/gcid:private_tutor",
    displayName: "Private Tutor",
  },
  {
    name: "categories/gcid:private_university",
    displayName: "Private university",
  },
  {
    name: "categories/gcid:probation_office",
    displayName: "Probation office",
  },
  {
    name: "categories/gcid:process_server",
    displayName: "Process server",
  },
  {
    name: "categories/gcid:proctologist",
    displayName: "Colorectal surgeon",
  },
  {
    name: "categories/gcid:produce_market",
    displayName: "Fruit and vegetable shop",
  },
  {
    name: "categories/gcid:produce_wholesaler",
    displayName: "Produce wholesaler",
  },
  {
    name: "categories/gcid:producteur_de_foie_gras",
    displayName: "Foie gras producer",
  },
  {
    name: "categories/gcid:professional_and_hobby_associations",
    displayName: "Professional and hobby associations",
  },
  {
    name: "categories/gcid:professional_organizer",
    displayName: "Professional Organiser",
  },
  {
    name: "categories/gcid:promenade",
    displayName: "Promenade",
  },
  {
    name: "categories/gcid:promotional_products_supplier",
    displayName: "Promotional products supplier",
  },
  {
    name: "categories/gcid:propane_supplier",
    displayName: "Propane supplier",
  },
  {
    name: "categories/gcid:propeller_shop",
    displayName: "Propeller shop",
  },
  {
    name: "categories/gcid:property_administrator",
    displayName: "Property administrator",
  },
  {
    name: "categories/gcid:property_investment",
    displayName: "Property Investment",
  },
  {
    name: "categories/gcid:property_maintenance",
    displayName: "Property maintenance",
  },
  {
    name: "categories/gcid:property_management_company",
    displayName: "Property management company",
  },
  {
    name: "categories/gcid:property_registry",
    displayName: "Land registry office",
  },
  {
    name: "categories/gcid:prosthetics",
    displayName: "Prosthetics",
  },
  {
    name: "categories/gcid:prosthodontist",
    displayName: "Prosthodontist",
  },
  {
    name: "categories/gcid:protective_clothing_supplier",
    displayName: "Protective clothing supplier",
  },
  {
    name: "categories/gcid:protestant_church",
    displayName: "Protestant church",
  },
  {
    name: "categories/gcid:provence_restaurant",
    displayName: "Provencal restaurant",
  },
  {
    name: "categories/gcid:provincial_council",
    displayName: "Provincial council",
  },
  {
    name: "categories/gcid:psychiatric_hospital",
    displayName: "Psychiatric hospital",
  },
  {
    name: "categories/gcid:psychiatrist",
    displayName: "Psychiatrist",
  },
  {
    name: "categories/gcid:psychic",
    displayName: "Clairvoyant",
  },
  {
    name: "categories/gcid:psychoanalyst",
    displayName: "Psychoanalyst",
  },
  {
    name: "categories/gcid:psychologist",
    displayName: "Psychologist",
  },
  {
    name: "categories/gcid:psychomotor_therapist",
    displayName: "Psychomotor therapist",
  },
  {
    name: "categories/gcid:psychoneurological_specialized_clinic",
    displayName: "Psychoneurological specialized clinic",
  },
  {
    name: "categories/gcid:psychopedagogy_clinic",
    displayName: "Psychopedagogy clinic",
  },
  {
    name: "categories/gcid:psychosomatic_medical_practitioner",
    displayName: "Psychosomatic medical practitioner",
  },
  {
    name: "categories/gcid:psychotherapist",
    displayName: "Psychotherapist",
  },
  {
    name: "categories/gcid:pub",
    displayName: "Pub",
  },
  {
    name: "categories/gcid:public_bath",
    displayName: "Public Baths",
  },
  {
    name: "categories/gcid:public_bathroom",
    displayName: "Public toilet",
  },
  {
    name: "categories/gcid:public_defenders_office",
    displayName: "Legal Aid Agency",
  },
  {
    name: "categories/gcid:public_female_bathroom",
    displayName: "Public female bathroom",
  },
  {
    name: "categories/gcid:public_golf_course",
    displayName: "Public golf course",
  },
  {
    name: "categories/gcid:public_health_department",
    displayName: "Public Health Department",
  },
  {
    name: "categories/gcid:public_housing",
    displayName: "HDB Flats",
  },
  {
    name: "categories/gcid:public_library",
    displayName: "Public library",
  },
  {
    name: "categories/gcid:public_male_bathroom",
    displayName: "Public male bathroom",
  },
  {
    name: "categories/gcid:public_medical_center",
    displayName: "Public Medical Centre",
  },
  {
    name: "categories/gcid:public_parking_space",
    displayName: "Public parking space",
  },
  {
    name: "categories/gcid:public_prosecutors_office",
    displayName: "Public prosecutors office",
  },
  {
    name: "categories/gcid:public_relations_firm",
    displayName: "Public relations firm",
  },
  {
    name: "categories/gcid:public_safety_office",
    displayName: "Public safety office",
  },
  {
    name: "categories/gcid:public_sauna",
    displayName: "Public sauna",
  },
  {
    name: "categories/gcid:public_school",
    displayName: "State School",
  },
  {
    name: "categories/gcid:public_sector_bank",
    displayName: "Public Sector Bank",
  },
  {
    name: "categories/gcid:public_swimming_pool",
    displayName: "Public swimming pool",
  },
  {
    name: "categories/gcid:public_transportation_system",
    displayName: "Public Transportation System",
  },
  {
    name: "categories/gcid:public_university",
    displayName: "Public university",
  },
  {
    name: "categories/gcid:public_webcam",
    displayName: "Public webcam",
  },
  {
    name: "categories/gcid:public_wheelchair_accessible_bathroom",
    displayName: "Public wheelchair-accessible bathroom",
  },
  {
    name: "categories/gcid:public_works_department",
    displayName: "Public Works Department",
  },
  {
    name: "categories/gcid:publisher",
    displayName: "Publisher",
  },
  {
    name: "categories/gcid:pueblan_restaurant",
    displayName: "Pueblan restaurant",
  },
  {
    name: "categories/gcid:puerto_rican_restaurant",
    displayName: "Puerto Rican restaurant",
  },
  {
    name: "categories/gcid:pulmonologist",
    displayName: "Pulmonologist",
  },
  {
    name: "categories/gcid:pump_supplier",
    displayName: "Pumping Equipment Supplier",
  },
  {
    name: "categories/gcid:pumping_equipment_and_service",
    displayName: "Pumping Equipment & Service",
  },
  {
    name: "categories/gcid:pumpkin_patch",
    displayName: "Pumpkin patch",
  },
  {
    name: "categories/gcid:punjabi_restaurant",
    displayName: "Punjabi restaurant",
  },
  {
    name: "categories/gcid:puppet_theater",
    displayName: "Puppet Theatre",
  },
  {
    name: "categories/gcid:pvc_industry",
    displayName: "PVC industry",
  },
  {
    name: "categories/gcid:pvc_windows_supplier",
    displayName: "PVC windows supplier",
  },
  {
    name: "categories/gcid:pyrotechnician",
    displayName: "Pyrotechnician",
  },
  {
    name: "categories/gcid:qing_fang_market_place",
    displayName: "Qing fang market place",
  },
  {
    name: "categories/gcid:quaker_church",
    displayName: "Quaker church",
  },
  {
    name: "categories/gcid:quantity_surveyor",
    displayName: "Quantity surveyor",
  },
  {
    name: "categories/gcid:quarry",
    displayName: "Quarry",
  },
  {
    name: "categories/gcid:quebecois_restaurant",
    displayName: "Québécois restaurant",
  },
  {
    name: "categories/gcid:quilt_shop",
    displayName: "Quilt shop",
  },
  {
    name: "categories/gcid:race_car_dealer",
    displayName: "Racing Car Dealer",
  },
  {
    name: "categories/gcid:race_course",
    displayName: "Racecourse",
  },
  {
    name: "categories/gcid:racing_car_parts_store",
    displayName: "Racing Car Parts Shop",
  },
  {
    name: "categories/gcid:raclette_restaurant",
    displayName: "Raclette restaurant",
  },
  {
    name: "categories/gcid:racquetball_club",
    displayName: "Racketball Club",
  },
  {
    name: "categories/gcid:radiator_repair_service",
    displayName: "Radiator repair service",
  },
  {
    name: "categories/gcid:radiator_shop",
    displayName: "Radiator shop",
  },
  {
    name: "categories/gcid:radio_broadcaster",
    displayName: "Radio broadcaster",
  },
  {
    name: "categories/gcid:radiologist",
    displayName: "Radiologist",
  },
  {
    name: "categories/gcid:radiotherapist",
    displayName: "Radiotherapist",
  },
  {
    name: "categories/gcid:raft_trip_outfitter",
    displayName: "Raft trip outfitter",
  },
  {
    name: "categories/gcid:rafting",
    displayName: "Rafting",
  },
  {
    name: "categories/gcid:rail_museum",
    displayName: "Rail museum",
  },
  {
    name: "categories/gcid:railing_contractor",
    displayName: "Railing contractor",
  },
  {
    name: "categories/gcid:railroad_company",
    displayName: "Railway Company",
  },
  {
    name: "categories/gcid:railroad_contractor",
    displayName: "Railway Contractor",
  },
  {
    name: "categories/gcid:railroad_equipment_supplier",
    displayName: "Railway Equipment Supplier",
  },
  {
    name: "categories/gcid:railroad_ties_supplier",
    displayName: "Railway Sleepers Supplier",
  },
  {
    name: "categories/gcid:railway_services",
    displayName: "Railway services",
  },
  {
    name: "categories/gcid:rainwater_tank_supplier",
    displayName: "Rainwater tank supplier",
  },
  {
    name: "categories/gcid:rajasthani_restaurant",
    displayName: "Rajasthani Restaurant",
  },
  {
    name: "categories/gcid:ram_dealer",
    displayName: "Ram dealer",
  },
  {
    name: "categories/gcid:ramen_restaurant",
    displayName: "Ramen restaurant",
  },
  {
    name: "categories/gcid:ranch",
    displayName: "Ranching",
  },
  {
    name: "categories/gcid:rare_book_store",
    displayName: "Rare Book Shop",
  },
  {
    name: "categories/gcid:raw_food_restaurant",
    displayName: "Raw food restaurant",
  },
  {
    name: "categories/gcid:ready_mix_concrete_supplier",
    displayName: "Ready-Mix Concrete Supplier",
  },
  {
    name: "categories/gcid:real_estate_agency",
    displayName: "Estate Agent",
  },
  {
    name: "categories/gcid:real_estate_agents",
    displayName: "Estate agent",
  },
  {
    name: "categories/gcid:real_estate_appraiser",
    displayName: "Property valuer",
  },
  {
    name: "categories/gcid:real_estate_attorney",
    displayName: "Property lawyer",
  },
  {
    name: "categories/gcid:real_estate_auctioneer",
    displayName: "Estate Agent Auctioneer",
  },
  {
    name: "categories/gcid:real_estate_consultant",
    displayName: "Property Consultant",
  },
  {
    name: "categories/gcid:real_estate_developer",
    displayName: "Property Developer",
  },
  {
    name: "categories/gcid:real_estate_fair",
    displayName: "Real estate fair",
  },
  {
    name: "categories/gcid:real_estate_rental_agency",
    displayName: "Property Rental Agency",
  },
  {
    name: "categories/gcid:real_estate_school",
    displayName: "Real estate college",
  },
  {
    name: "categories/gcid:real_estate_surveyor",
    displayName: "Property Surveyor",
  },
  {
    name: "categories/gcid:realschule",
    displayName: "Realschule (middle-tier secondary school)",
  },
  {
    name: "categories/gcid:reclamation_centre",
    displayName: "Reclamation centre",
  },
  {
    name: "categories/gcid:record_company",
    displayName: "Record company",
  },
  {
    name: "categories/gcid:record_storage_facility",
    displayName: "Records storage facility",
  },
  {
    name: "categories/gcid:record_store",
    displayName: "Record Shop",
  },
  {
    name: "categories/gcid:recording_studio",
    displayName: "Recording studio",
  },
  {
    name: "categories/gcid:recreation_center",
    displayName: "Recreation Centre",
  },
  {
    name: "categories/gcid:recruiter",
    displayName: "Recruiter",
  },
  {
    name: "categories/gcid:rectory",
    displayName: "Rectory",
  },
  {
    name: "categories/gcid:recycling_center",
    displayName: "Recycling Centre",
  },
  {
    name: "categories/gcid:recycling_drop_off_location",
    displayName: "Recycling drop-off location",
  },
  {
    name: "categories/gcid:reenactment_site",
    displayName: "Reenactment site",
  },
  {
    name: "categories/gcid:reflexologist",
    displayName: "Reflexologist",
  },
  {
    name: "categories/gcid:reform_synagogue",
    displayName: "Reform synagogue",
  },
  {
    name: "categories/gcid:reformed_church",
    displayName: "Reformed church",
  },
  {
    name: "categories/gcid:refrigerated_transport_service",
    displayName: "Refrigerated transport service",
  },
  {
    name: "categories/gcid:refrigerator_repair_service",
    displayName: "Refrigerator repair service",
  },
  {
    name: "categories/gcid:refrigerator_store",
    displayName: "Refrigerator Shop",
  },
  {
    name: "categories/gcid:refugee_camp",
    displayName: "Refugee camp",
  },
  {
    name: "categories/gcid:regional_airport",
    displayName: "Regional airport",
  },
  {
    name: "categories/gcid:regional_council",
    displayName: "Regional council",
  },
  {
    name: "categories/gcid:regional_government_office",
    displayName: "Regional government office",
  },
  {
    name: "categories/gcid:registered_general_nurse",
    displayName: "Registered general nurse",
  },
  {
    name: "categories/gcid:registration_office",
    displayName: "Registration office",
  },
  {
    name: "categories/gcid:registry_office",
    displayName: "Registry office",
  },
  {
    name: "categories/gcid:rehabilitation_center",
    displayName: "Rehabilitation Centre",
  },
  {
    name: "categories/gcid:reiki_therapist",
    displayName: "Reiki therapist",
  },
  {
    name: "categories/gcid:religious_book_store",
    displayName: "Religious Book Store",
  },
  {
    name: "categories/gcid:religious_destination",
    displayName: "Religious destination",
  },
  {
    name: "categories/gcid:religious_goods_store",
    displayName: "Religious Goods Shop",
  },
  {
    name: "categories/gcid:religious_institution",
    displayName: "Religious institution",
  },
  {
    name: "categories/gcid:religious_organization",
    displayName: "Religious organisation",
  },
  {
    name: "categories/gcid:religious_school",
    displayName: "Faith school",
  },
  {
    name: "categories/gcid:remodeler",
    displayName: "Remodeller",
  },
  {
    name: "categories/gcid:renault_dealer",
    displayName: "Renault dealer",
  },
  {
    name: "categories/gcid:renters_insurance_agency",
    displayName: "Tenant's Insurance Agency",
  },
  {
    name: "categories/gcid:repair_service",
    displayName: "Repair service",
  },
  {
    name: "categories/gcid:reproductive_health_clinic",
    displayName: "Reproductive health clinic",
  },
  {
    name: "categories/gcid:reptile_store",
    displayName: "Reptile Shop",
  },
  {
    name: "categories/gcid:research_and_product_development",
    displayName: "Research and product development",
  },
  {
    name: "categories/gcid:research_engineer",
    displayName: "Research Engineer",
  },
  {
    name: "categories/gcid:research_foundation",
    displayName: "Research foundation",
  },
  {
    name: "categories/gcid:research_institute",
    displayName: "Research institute",
  },
  {
    name: "categories/gcid:resident_registration_office",
    displayName: "Resident Registration Office",
  },
  {
    name: "categories/gcid:residential_college",
    displayName: "Residential college",
  },
  {
    name: "categories/gcid:residents_association",
    displayName: "Residents association",
  },
  {
    name: "categories/gcid:resort_hotel",
    displayName: "Resort hotel",
  },
  {
    name: "categories/gcid:rest_stop",
    displayName: "Motorway services",
  },
  {
    name: "categories/gcid:restaurant",
    displayName: "Restaurant",
  },
  {
    name: "categories/gcid:restaurant_brasserie",
    displayName: "Brasserie",
  },
  {
    name: "categories/gcid:restaurant_supply_store",
    displayName: "Catering supplier",
  },
  {
    name: "categories/gcid:resume_service",
    displayName: "CV service",
  },
  {
    name: "categories/gcid:retail_space_rental_agency",
    displayName: "Retail space rental agency",
  },
  {
    name: "categories/gcid:retaining_wall_supplier",
    displayName: "Retaining Wall Contractor",
  },
  {
    name: "categories/gcid:retirement_community",
    displayName: "Retirement village",
  },
  {
    name: "categories/gcid:retirement_home",
    displayName: "Old Age Home",
  },
  {
    name: "categories/gcid:retreat_center",
    displayName: "Retreat Centre",
  },
  {
    name: "categories/gcid:rheumatologist",
    displayName: "Rheumatologist",
  },
  {
    name: "categories/gcid:rice_cake_shop",
    displayName: "Rice cake shop",
  },
  {
    name: "categories/gcid:rice_cracker_shop",
    displayName: "Rice cracker shop",
  },
  {
    name: "categories/gcid:rice_mill",
    displayName: "Rice mill",
  },
  {
    name: "categories/gcid:rice_restaurant",
    displayName: "Rice restaurant",
  },
  {
    name: "categories/gcid:rice_shop",
    displayName: "Rice shop",
  },
  {
    name: "categories/gcid:rice_wholesaler",
    displayName: "Rice wholesaler",
  },
  {
    name: "categories/gcid:river_port",
    displayName: "River port",
  },
  {
    name: "categories/gcid:road_construction_company",
    displayName: "Road Contractor",
  },
  {
    name: "categories/gcid:road_construction_machine_repair_service",
    displayName: "Road construction machine repair service",
  },
  {
    name: "categories/gcid:road_cycling",
    displayName: "Road cycling",
  },
  {
    name: "categories/gcid:road_safety_town",
    displayName: "Road safety town",
  },
  {
    name: "categories/gcid:roads_ports_and_canals_engineers_association",
    displayName: "Roads ports and canals engineers association",
  },
  {
    name: "categories/gcid:rock_climbing",
    displayName: "Rock climbing",
  },
  {
    name: "categories/gcid:rock_climbing_centre",
    displayName: "Rock climbing gym",
  },
  {
    name: "categories/gcid:rock_climbing_instructor",
    displayName: "Rock climbing instructor",
  },
  {
    name: "categories/gcid:rock_music_club",
    displayName: "Rock music club",
  },
  {
    name: "categories/gcid:rock_shop",
    displayName: "Rock shop",
  },
  {
    name: "categories/gcid:rodeo",
    displayName: "Rodeo",
  },
  {
    name: "categories/gcid:rolled_metal_products_supplier",
    displayName: "Rolled metal products supplier",
  },
  {
    name: "categories/gcid:roller_coaster",
    displayName: "Roller coaster",
  },
  {
    name: "categories/gcid:roller_skating_club",
    displayName: "Roller skating club",
  },
  {
    name: "categories/gcid:roller_skating_rink",
    displayName: "Roller skating rink",
  },
  {
    name: "categories/gcid:rolls_royce_dealer",
    displayName: "Rolls-Royce dealer",
  },
  {
    name: "categories/gcid:roman_restaurant",
    displayName: "Roman restaurant",
  },
  {
    name: "categories/gcid:romanian_restaurant",
    displayName: "Romanian restaurant",
  },
  {
    name: "categories/gcid:roofing_contractor",
    displayName: "Roofing Service",
  },
  {
    name: "categories/gcid:roofing_supply_store",
    displayName: "Roofing Supply Shop",
  },
  {
    name: "categories/gcid:roommate_referral_service",
    displayName: "Lodger Referral Service",
  },
  {
    name: "categories/gcid:rowing_area",
    displayName: "Rowing area",
  },
  {
    name: "categories/gcid:rowing_club",
    displayName: "Rowing club",
  },
  {
    name: "categories/gcid:rsl_club",
    displayName: "RSL Club",
  },
  {
    name: "categories/gcid:rubber_products_supplier",
    displayName: "Rubber products supplier",
  },
  {
    name: "categories/gcid:rubber_stamp_store",
    displayName: "Rubber Stamp Shop",
  },
  {
    name: "categories/gcid:rug_store",
    displayName: "Rug Shop",
  },
  {
    name: "categories/gcid:rugby",
    displayName: "Rugby",
  },
  {
    name: "categories/gcid:rugby_club",
    displayName: "Rugby club",
  },
  {
    name: "categories/gcid:rugby_field",
    displayName: "Rugby field",
  },
  {
    name: "categories/gcid:rugby_league_club",
    displayName: "Rugby league club",
  },
  {
    name: "categories/gcid:rugby_store",
    displayName: "Rugby Shop",
  },
  {
    name: "categories/gcid:running_store",
    displayName: "Running Shop",
  },
  {
    name: "categories/gcid:russian_grocery_store",
    displayName: "Russian grocery store",
  },
  {
    name: "categories/gcid:russian_orthodox_church",
    displayName: "Russian Orthodox church",
  },
  {
    name: "categories/gcid:russian_restaurant",
    displayName: "Russian restaurant",
  },
  {
    name: "categories/gcid:rustic_furniture_store",
    displayName: "Rustic Furniture Shop",
  },
  {
    name: "categories/gcid:rv_dealer",
    displayName: "Caravan Dealer",
  },
  {
    name: "categories/gcid:rv_park",
    displayName: "Caravan Park",
  },
  {
    name: "categories/gcid:rv_rental_agency",
    displayName: "Campervan and caravan rental agency",
  },
  {
    name: "categories/gcid:rv_repair_shop",
    displayName: "Caravan Repair Shop",
  },
  {
    name: "categories/gcid:rv_storage_facility",
    displayName: "Caravan Storage Facility",
  },
  {
    name: "categories/gcid:rv_supply_store",
    displayName: "Caravan Supply Shop",
  },
  {
    name: "categories/gcid:saab_dealer",
    displayName: "Saab dealer",
  },
  {
    name: "categories/gcid:sacem",
    displayName: "Sacem",
  },
  {
    name: "categories/gcid:saddlery",
    displayName: "Saddlery",
  },
  {
    name: "categories/gcid:safe_and_vault_shop",
    displayName: "Safe & vault shop",
  },
  {
    name: "categories/gcid:safety_equipment_supplier",
    displayName: "Safety equipment supplier",
  },
  {
    name: "categories/gcid:sailing_club",
    displayName: "Sailing club",
  },
  {
    name: "categories/gcid:sailing_event_area",
    displayName: "Sailing event area",
  },
  {
    name: "categories/gcid:sailing_school",
    displayName: "Sailing school",
  },
  {
    name: "categories/gcid:sailmaker",
    displayName: "Sailmaker",
  },
  {
    name: "categories/gcid:sake_brewery",
    displayName: "Sake brewery",
  },
  {
    name: "categories/gcid:salad_shop",
    displayName: "Salad shop",
  },
  {
    name: "categories/gcid:salsa_bar",
    displayName: "Salsa bar",
  },
  {
    name: "categories/gcid:salsa_classes",
    displayName: "Salsa Dance Class",
  },
  {
    name: "categories/gcid:salvadoran_restaurant",
    displayName: "Salvadoran restaurant",
  },
  {
    name: "categories/gcid:salvage_dealer",
    displayName: "Salvage dealer",
  },
  {
    name: "categories/gcid:salvage_yard",
    displayName: "Scrap Yard",
  },
  {
    name: "categories/gcid:samba_school",
    displayName: "Samba school",
  },
  {
    name: "categories/gcid:sambo_school",
    displayName: "Sambo school",
  },
  {
    name: "categories/gcid:sambodrome",
    displayName: "Sambodrome",
  },
  {
    name: "categories/gcid:sand_and_gravel_supplier",
    displayName: "Sand and Gravel Supplier",
  },
  {
    name: "categories/gcid:sand_plant",
    displayName: "Sand plant",
  },
  {
    name: "categories/gcid:sandblasting_service",
    displayName: "Sandblasting service",
  },
  {
    name: "categories/gcid:sandwich_shop",
    displayName: "Sandwich shop",
  },
  {
    name: "categories/gcid:sanitary_inspection",
    displayName: "Sanitary inspection",
  },
  {
    name: "categories/gcid:sanitation_service",
    displayName: "Sanitation Service",
  },
  {
    name: "categories/gcid:sardinian_restaurant",
    displayName: "Sardinian restaurant",
  },
  {
    name: "categories/gcid:saree_shop",
    displayName: "Saree Shop",
  },
  {
    name: "categories/gcid:satay_restaurant",
    displayName: "Satay restaurant",
  },
  {
    name: "categories/gcid:satellite_communication_service",
    displayName: "Satellite Communication Services Provider",
  },
  {
    name: "categories/gcid:saturn_dealer",
    displayName: "Saturn dealer",
  },
  {
    name: "categories/gcid:sauna",
    displayName: "Sauna",
  },
  {
    name: "categories/gcid:sauna_club",
    displayName: "Sauna club",
  },
  {
    name: "categories/gcid:sauna_store",
    displayName: "Sauna Shop",
  },
  {
    name: "categories/gcid:savings_bank",
    displayName: "Savings bank",
  },
  {
    name: "categories/gcid:saw_mill",
    displayName: "Saw mill",
  },
  {
    name: "categories/gcid:saw_sharpening_service",
    displayName: "Saw sharpening service",
  },
  {
    name: "categories/gcid:scaffolder",
    displayName: "Scaffolder",
  },
  {
    name: "categories/gcid:scaffolding_rental_service",
    displayName: "Scaffolding Service",
  },
  {
    name: "categories/gcid:scale_model_club",
    displayName: "Scale model club",
  },
  {
    name: "categories/gcid:scale_model_shop",
    displayName: "Model shop",
  },
  {
    name: "categories/gcid:scale_repair_service",
    displayName: "Scale repair service",
  },
  {
    name: "categories/gcid:scale_supplier",
    displayName: "Weighing Scale Supplier",
  },
  {
    name: "categories/gcid:scandinavian_restaurant",
    displayName: "Scandinavian restaurant",
  },
  {
    name: "categories/gcid:scenic_spot",
    displayName: "Scenic point",
  },
  {
    name: "categories/gcid:scenography_company",
    displayName: "Scenography company",
  },
  {
    name: "categories/gcid:school",
    displayName: "School",
  },
  {
    name: "categories/gcid:school_administrator",
    displayName: "School administrator",
  },
  {
    name: "categories/gcid:school_bus_service",
    displayName: "School bus service",
  },
  {
    name: "categories/gcid:school_center",
    displayName: "School Centre",
  },
  {
    name: "categories/gcid:school_district_office",
    displayName: "School district office",
  },
  {
    name: "categories/gcid:school_for_the_deaf",
    displayName: "School for the deaf",
  },
  {
    name: "categories/gcid:school_house",
    displayName: "School house",
  },
  {
    name: "categories/gcid:school_lunch_center",
    displayName: "School Lunch Centre",
  },
  {
    name: "categories/gcid:school_supply_store",
    displayName: "School Supply Shop",
  },
  {
    name: "categories/gcid:science_museum",
    displayName: "Science museum",
  },
  {
    name: "categories/gcid:scientific_equipment_supplier",
    displayName: "Scientific Equipment Supplier",
  },
  {
    name: "categories/gcid:scooter_rental_service",
    displayName: "Scooter rental service",
  },
  {
    name: "categories/gcid:scooter_repair_shop",
    displayName: "Scooter repair shop",
  },
  {
    name: "categories/gcid:scottish_restaurant",
    displayName: "Scottish restaurant",
  },
  {
    name: "categories/gcid:scout_hall",
    displayName: "Scout hall",
  },
  {
    name: "categories/gcid:scout_home",
    displayName: "Scout home",
  },
  {
    name: "categories/gcid:scouting",
    displayName: "Scouting",
  },
  {
    name: "categories/gcid:scrap_merchant",
    displayName: "Kabadiwala & Scrap Merchant",
  },
  {
    name: "categories/gcid:scrap_metal_dealer",
    displayName: "Scrap metal dealer",
  },
  {
    name: "categories/gcid:scrapbooking_store",
    displayName: "Arts and Crafts Shop",
  },
  {
    name: "categories/gcid:screen_printer",
    displayName: "Screen printer",
  },
  {
    name: "categories/gcid:screen_printing_shop",
    displayName: "Screen printing shop",
  },
  {
    name: "categories/gcid:screen_printing_supply_store",
    displayName: "Screen Printing Supply Shop",
  },
  {
    name: "categories/gcid:screen_repair_service",
    displayName: "Screen repair service",
  },
  {
    name: "categories/gcid:screen_store",
    displayName: "Screen Shop",
  },
  {
    name: "categories/gcid:screw_supplier",
    displayName: "Screw supplier",
  },
  {
    name: "categories/gcid:scuba_instructor",
    displayName: "SCUBA instructor",
  },
  {
    name: "categories/gcid:scuba_tour_agency",
    displayName: "SCUBA tour agency",
  },
  {
    name: "categories/gcid:sculptor",
    displayName: "Sculptor",
  },
  {
    name: "categories/gcid:sculpture",
    displayName: "Sculpture",
  },
  {
    name: "categories/gcid:sculpture_museum",
    displayName: "Sculpture museum",
  },
  {
    name: "categories/gcid:seafood_donburi",
    displayName: "Seafood donburi restaurant",
  },
  {
    name: "categories/gcid:seafood_farm",
    displayName: "Seafood farm",
  },
  {
    name: "categories/gcid:seafood_market",
    displayName: "Seafood market",
  },
  {
    name: "categories/gcid:seafood_restaurant",
    displayName: "Seafood restaurant",
  },
  {
    name: "categories/gcid:seafood_wholesaler",
    displayName: "Seafood wholesaler",
  },
  {
    name: "categories/gcid:seal_shop",
    displayName: "Seal shop",
  },
  {
    name: "categories/gcid:seaplane_base",
    displayName: "Seaplane base",
  },
  {
    name: "categories/gcid:seasonal_goods_store",
    displayName: "Seasonal Goods Store",
  },
  {
    name: "categories/gcid:seat_dealer",
    displayName: "Seat dealer",
  },
  {
    name: "categories/gcid:seblak_restaurant",
    displayName: "Seblak restaurant",
  },
  {
    name: "categories/gcid:second_hand_shop",
    displayName: "Secondhand Shop",
  },
  {
    name: "categories/gcid:secondary_school",
    displayName: "Secondary school",
  },
  {
    name: "categories/gcid:secondary_school_three",
    displayName: "Secondary school (Germany)",
  },
  {
    name: "categories/gcid:security_guard_service",
    displayName: "Security guard service",
  },
  {
    name: "categories/gcid:security_service",
    displayName: "Security service",
  },
  {
    name: "categories/gcid:security_system_installer",
    displayName: "Security system installer",
  },
  {
    name: "categories/gcid:security_system_supplier",
    displayName: "Security system supplier",
  },
  {
    name: "categories/gcid:seed_supplier",
    displayName: "Agricultural Seed Store",
  },
  {
    name: "categories/gcid:seitai",
    displayName: "Seitai",
  },
  {
    name: "categories/gcid:self_defense_school",
    displayName: "Self Defence School",
  },
  {
    name: "categories/gcid:self_service_car_wash",
    displayName: "Self service car wash",
  },
  {
    name: "categories/gcid:self_service_health_station",
    displayName: "Self service health station",
  },
  {
    name: "categories/gcid:self_service_restaurant",
    displayName: "Self service restaurant",
  },
  {
    name: "categories/gcid:self_storage_facility",
    displayName: "Self storage facility",
  },
  {
    name: "categories/gcid:semi_conductor_supplier",
    displayName: "Semi Conductor Supplier",
  },
  {
    name: "categories/gcid:seminary",
    displayName: "Seminary",
  },
  {
    name: "categories/gcid:senior_citizen_center",
    displayName: "Retirement Centre",
  },
  {
    name: "categories/gcid:senior_citizens_care_service",
    displayName: "Aged Care",
  },
  {
    name: "categories/gcid:senior_high_school",
    displayName: "Senior high school",
  },
  {
    name: "categories/gcid:septic_system_service",
    displayName: "Septic tank service",
  },
  {
    name: "categories/gcid:serbian_restaurant",
    displayName: "Serbian restaurant",
  },
  {
    name: "categories/gcid:serviced_accommodation",
    displayName: "Serviced accommodation",
  },
  {
    name: "categories/gcid:serviced_apartment",
    displayName: "Service Apartment",
  },
  {
    name: "categories/gcid:seventh_day_adventist_church",
    displayName: "Seventh-day Adventist church",
  },
  {
    name: "categories/gcid:sewage_disposal_service",
    displayName: "Sewage Disposal Service",
  },
  {
    name: "categories/gcid:sewage_treatment_plant",
    displayName: "Waste water and sewage treatment company",
  },
  {
    name: "categories/gcid:sewing_company",
    displayName: "Sewing company",
  },
  {
    name: "categories/gcid:sewing_machine_repair_service",
    displayName: "Sewing machine repair service",
  },
  {
    name: "categories/gcid:sewing_machine_store",
    displayName: "Sewing Machine Shop",
  },
  {
    name: "categories/gcid:sewing_shop",
    displayName: "Sewing shop",
  },
  {
    name: "categories/gcid:sexologist",
    displayName: "Sexologist",
  },
  {
    name: "categories/gcid:seychelles_restaurant",
    displayName: "Seychelles restaurant",
  },
  {
    name: "categories/gcid:sfiha_restaurant",
    displayName: "Sfiha restaurant",
  },
  {
    name: "categories/gcid:shabu_shabu_and_sukiyaki_restaurant",
    displayName: "Sukiyaki and Shabu Shabu restaurant",
  },
  {
    name: "categories/gcid:shabu_shabu_restaurant",
    displayName: "Shabu-shabu Restaurant",
  },
  {
    name: "categories/gcid:shan_dong_restaurant",
    displayName: "Shandong restaurant",
  },
  {
    name: "categories/gcid:shanghainese_restaurant",
    displayName: "Shanghainese restaurant",
  },
  {
    name: "categories/gcid:shared_use_commercial_kitchen",
    displayName: "Shared-use commercial kitchen",
  },
  {
    name: "categories/gcid:sharpening_service",
    displayName: "Sharpening service",
  },
  {
    name: "categories/gcid:shawarma_restaurant",
    displayName: "Shawarma restaurant",
  },
  {
    name: "categories/gcid:shed_builder",
    displayName: "Shed builder",
  },
  {
    name: "categories/gcid:sheep_shearer",
    displayName: "Sheep Shearer",
  },
  {
    name: "categories/gcid:sheepskin_and_wool_products_supplier",
    displayName: "Sheepskin and Wool Products Supplier",
  },
  {
    name: "categories/gcid:sheepskin_coat_store",
    displayName: "Sheepskin coat store",
  },
  {
    name: "categories/gcid:sheet_metal_contractor",
    displayName: "Sheet metal contractor",
  },
  {
    name: "categories/gcid:sheet_music_store",
    displayName: "Sheet Music Shop",
  },
  {
    name: "categories/gcid:shelter",
    displayName: "Shelter",
  },
  {
    name: "categories/gcid:sheltered_housing",
    displayName: "Sheltered housing",
  },
  {
    name: "categories/gcid:shelving_store",
    displayName: "Shelving Shop",
  },
  {
    name: "categories/gcid:sheriffs_department",
    displayName: "Chief of Police Department",
  },
  {
    name: "categories/gcid:shinkin_bank",
    displayName: "Shinkin bank",
  },
  {
    name: "categories/gcid:shinto_shrine",
    displayName: "Shinto shrine",
  },
  {
    name: "categories/gcid:ship_building",
    displayName: "Ship building",
  },
  {
    name: "categories/gcid:shipbuilding_and_repair_company",
    displayName: "Shipbuilding and Repair Company",
  },
  {
    name: "categories/gcid:shipping_and_mailing_service",
    displayName: "Shipping and postal service",
  },
  {
    name: "categories/gcid:shipping_company",
    displayName: "Delivery Company",
  },
  {
    name: "categories/gcid:shipping_equipment_industry",
    displayName: "Shipping equipment industry",
  },
  {
    name: "categories/gcid:shipping_service",
    displayName: "Shipping service",
  },
  {
    name: "categories/gcid:shipyard",
    displayName: "Shipyard",
  },
  {
    name: "categories/gcid:shochu_brewery",
    displayName: "Shochu brewery",
  },
  {
    name: "categories/gcid:shoe_factory",
    displayName: "Shoe Factory",
  },
  {
    name: "categories/gcid:shoe_repair_shop",
    displayName: "Shoe repair shop",
  },
  {
    name: "categories/gcid:shoe_shining_service",
    displayName: "Shoe shining service",
  },
  {
    name: "categories/gcid:shoe_store",
    displayName: "Shoe Shop",
  },
  {
    name: "categories/gcid:shoe_wholesaler",
    displayName: "Shoe Wholesaler",
  },
  {
    name: "categories/gcid:shogi_lesson",
    displayName: "Shogi lesson",
  },
  {
    name: "categories/gcid:shooting_event_area",
    displayName: "Shooting event area",
  },
  {
    name: "categories/gcid:shooting_range",
    displayName: "Shooting range",
  },
  {
    name: "categories/gcid:shop_supermarket_furniture_store",
    displayName: "Shop Supermarket Furniture Shop",
  },
  {
    name: "categories/gcid:shopfitter",
    displayName: "Shopfitter",
  },
  {
    name: "categories/gcid:shopping_center",
    displayName: "Shopping Centre",
  },
  {
    name: "categories/gcid:short_term_apartment_rental_agency",
    displayName: "Short term apartment rental agency",
  },
  {
    name: "categories/gcid:shower_door_shop",
    displayName: "Shower screen shop",
  },
  {
    name: "categories/gcid:showroom",
    displayName: "Showroom",
  },
  {
    name: "categories/gcid:shredding_service",
    displayName: "Shredding Services Provider",
  },
  {
    name: "categories/gcid:shrimp_farm",
    displayName: "Shrimp farm",
  },
  {
    name: "categories/gcid:shrine",
    displayName: "Shrine",
  },
  {
    name: "categories/gcid:sichuan_restaurant",
    displayName: "Sichuan restaurant",
  },
  {
    name: "categories/gcid:sicilian_restaurant",
    displayName: "Sicilian restaurant",
  },
  {
    name: "categories/gcid:siding_contractor",
    displayName: "Cladding contractor",
  },
  {
    name: "categories/gcid:sightseeing_tour_agency",
    displayName: "Sightseeing Tour Operator",
  },
  {
    name: "categories/gcid:sign_shop",
    displayName: "Sign shop",
  },
  {
    name: "categories/gcid:sikh_temple",
    displayName: "Gurdwara",
  },
  {
    name: "categories/gcid:silk_plant_shop",
    displayName: "Silk plant shop",
  },
  {
    name: "categories/gcid:silk_store",
    displayName: "Silk Shop",
  },
  {
    name: "categories/gcid:silversmith",
    displayName: "Silversmith",
  },
  {
    name: "categories/gcid:singaporean_restaurant",
    displayName: "Singaporean restaurant",
  },
  {
    name: "categories/gcid:singing_telegram_service",
    displayName: "Singing telegram service",
  },
  {
    name: "categories/gcid:single_sex_secondary_school",
    displayName: "Single sex secondary school",
  },
  {
    name: "categories/gcid:singles_organization",
    displayName: "Singles Organisation",
  },
  {
    name: "categories/gcid:sixth_form_college",
    displayName: "Sixth form college",
  },
  {
    name: "categories/gcid:skate_sharpening_service",
    displayName: "Skate sharpening service",
  },
  {
    name: "categories/gcid:skate_shop",
    displayName: "Skate shop",
  },
  {
    name: "categories/gcid:skateboard_park",
    displayName: "Skate park",
  },
  {
    name: "categories/gcid:skateboard_shop",
    displayName: "Skateboard shop",
  },
  {
    name: "categories/gcid:skating_instructor",
    displayName: "Skating Instructor",
  },
  {
    name: "categories/gcid:skeet_shooting_range",
    displayName: "Skeet shooting range",
  },
  {
    name: "categories/gcid:skewer_deep_frying",
    displayName: "Kushiage and kushikatsu restaurant",
  },
  {
    name: "categories/gcid:ski_club",
    displayName: "Skiing Club",
  },
  {
    name: "categories/gcid:ski_rental_service",
    displayName: "Ski Hire Service",
  },
  {
    name: "categories/gcid:ski_repair_service",
    displayName: "Ski repair service",
  },
  {
    name: "categories/gcid:ski_resort",
    displayName: "Ski resort",
  },
  {
    name: "categories/gcid:ski_school",
    displayName: "Ski School",
  },
  {
    name: "categories/gcid:ski_store",
    displayName: "Ski shop",
  },
  {
    name: "categories/gcid:skin_care_clinic",
    displayName: "Skin care clinic",
  },
  {
    name: "categories/gcid:skin_care_products_vending_machine",
    displayName: "Skin care products vending machine",
  },
  {
    name: "categories/gcid:skittle_club",
    displayName: "Skittles Club",
  },
  {
    name: "categories/gcid:skoda_dealer",
    displayName: "Skoda dealer",
  },
  {
    name: "categories/gcid:skydiving_center",
    displayName: "Skydiving Centre",
  },
  {
    name: "categories/gcid:skylight_contractor",
    displayName: "Skylight contractor",
  },
  {
    name: "categories/gcid:slaughterhouse",
    displayName: "Slaughterhouse",
  },
  {
    name: "categories/gcid:sleep_clinic",
    displayName: "Sleep Clinic",
  },
  {
    name: "categories/gcid:small_appliance_repair_service",
    displayName: "Small appliance repair service",
  },
  {
    name: "categories/gcid:small_claims_assistance_service",
    displayName: "Small Claims Service Agency",
  },
  {
    name: "categories/gcid:small_engine_repair_service",
    displayName: "Small engine repair service",
  },
  {
    name: "categories/gcid:small_plates_restaurant",
    displayName: "Small plates restaurant",
  },
  {
    name: "categories/gcid:smart_car_dealer",
    displayName: "Smart Car dealer",
  },
  {
    name: "categories/gcid:smart_dealer",
    displayName: "Smart dealer",
  },
  {
    name: "categories/gcid:smart_shop",
    displayName: "Smart shop",
  },
  {
    name: "categories/gcid:smog_inspection_station",
    displayName: "Pollution Inspection Station",
  },
  {
    name: "categories/gcid:snow_removal_service",
    displayName: "Snow removal service",
  },
  {
    name: "categories/gcid:snowboard_rental_service",
    displayName: "Snowboard rental service",
  },
  {
    name: "categories/gcid:snowboard_shop",
    displayName: "Snowboard shop",
  },
  {
    name: "categories/gcid:snowmobile_dealer",
    displayName: "Snowmobile dealer",
  },
  {
    name: "categories/gcid:snowmobile_rental_service",
    displayName: "Snowmobile rental service",
  },
  {
    name: "categories/gcid:soapland",
    displayName: "Soapland",
  },
  {
    name: "categories/gcid:soba_noodle_shop",
    displayName: "Soba noodle shop",
  },
  {
    name: "categories/gcid:soccer_club",
    displayName: "Football club",
  },

  {
    name: "categories/gcid:soccer_practice",
    displayName: "Football Practice",
  },
  {
    name: "categories/gcid:soccer_store",
    displayName: "Football Shop",
  },
  {
    name: "categories/gcid:social_club",
    displayName: "Social club",
  },
  {
    name: "categories/gcid:social_security_attorney",
    displayName: "Social security lawyer",
  },
  {
    name: "categories/gcid:social_security_financial_department",
    displayName: "Social security financial department",
  },
  {
    name: "categories/gcid:social_security_office",
    displayName: "Welfare Office",
  },
  {
    name: "categories/gcid:social_services_organization",
    displayName: "Social services organisation",
  },
  {
    name: "categories/gcid:social_welfare_center",
    displayName: "Social Welfare Centre",
  },
  {
    name: "categories/gcid:social_worker",
    displayName: "Social worker",
  },
  {
    name: "categories/gcid:societe_de_flocage",
    displayName: "Societe de Flocage",
  },
  {
    name: "categories/gcid:sod_supplier",
    displayName: "Sod supplier",
  },
  {
    name: "categories/gcid:sofa_store",
    displayName: "Sofa store",
  },
  {
    name: "categories/gcid:soft_drinks_shop",
    displayName: "Soft drinks shop",
  },
  {
    name: "categories/gcid:soft_shelled_turtle_dish_restaurant",
    displayName: "Suppon restaurant",
  },
  {
    name: "categories/gcid:softball_club",
    displayName: "Softball club",
  },
  {
    name: "categories/gcid:softball_field",
    displayName: "Softball field",
  },
  {
    name: "categories/gcid:software_company",
    displayName: "Software company",
  },
  {
    name: "categories/gcid:software_training_institute",
    displayName: "Software Training Institute",
  },
  {
    name: "categories/gcid:soil_testing_service",
    displayName: "Soil testing service",
  },
  {
    name: "categories/gcid:sokol_house",
    displayName: "Sokol house",
  },
  {
    name: "categories/gcid:solar_energy_company",
    displayName: "Solar Energy Company",
  },
  {
    name: "categories/gcid:solar_energy_contractor",
    displayName: "Solar energy contractor",
  },
  {
    name: "categories/gcid:solar_energy_equipment_supplier",
    displayName: "Solar energy equipment supplier",
  },
  {
    name: "categories/gcid:solar_hot_water_system_supplier",
    displayName: "Solar hot water system supplier",
  },
  {
    name: "categories/gcid:solar_photovoltaic_power_plant",
    displayName: "Solar photovoltaic power plant",
  },
  {
    name: "categories/gcid:solid_fuel_company",
    displayName: "Solid Fuel Company",
  },
  {
    name: "categories/gcid:solid_waste_engineer",
    displayName: "Solid waste engineer",
  },
  {
    name: "categories/gcid:soondae_restaurant",
    displayName: "Soondae restaurant",
  },
  {
    name: "categories/gcid:soto_ayam_restaurant",
    displayName: "Soto ayam restaurant",
  },
  {
    name: "categories/gcid:soto_restaurant",
    displayName: "Soto restaurant",
  },
  {
    name: "categories/gcid:soul_food_restaurant",
    displayName: "Soul food restaurant",
  },
  {
    name: "categories/gcid:soup_kitchen",
    displayName: "Soup kitchen",
  },
  {
    name: "categories/gcid:soup_restaurant",
    displayName: "Soup restaurant",
  },

  {
    name: "categories/gcid:south_african_restaurant",
    displayName: "South African restaurant",
  },
  {
    name: "categories/gcid:south_american_restaurant",
    displayName: "South American restaurant",
  },
  {
    name: "categories/gcid:south_asia_restaurant",
    displayName: "South Asian restaurant",
  },
  {
    name: "categories/gcid:south_east_asian_restaurant",
    displayName: "South East Asian restaurant",
  },
  {
    name: "categories/gcid:south_indian_restaurant",
    displayName: "South Indian restaurant",
  },
  {
    name: "categories/gcid:south_sulawesi_restaurant",
    displayName: "South Sulawesi restaurant",
  },
  {
    name: "categories/gcid:southern_italian_restaurant",
    displayName: "Southern Italian restaurant",
  },
  {
    name: "categories/gcid:southern_us_restaurant",
    displayName: "Southern restaurant (US)",
  },
  {
    name: "categories/gcid:southwest_french_restaurant",
    displayName: "South West French restaurant",
  },
  {
    name: "categories/gcid:southwestern_us_restaurant",
    displayName: "South Western restaurant (US)",
  },
  {
    name: "categories/gcid:souvenir_manufacturer",
    displayName: "Souvenir manufacturer",
  },
  {
    name: "categories/gcid:souvenir_store",
    displayName: "Souvenir Shop",
  },
  {
    name: "categories/gcid:soy_sauce_maker",
    displayName: "Soy sauce maker",
  },
  {
    name: "categories/gcid:spa",
    displayName: "Spa",
  },
  {
    name: "categories/gcid:spa_and_health_club",
    displayName: "Spa and health club",
  },
  {
    name: "categories/gcid:spa_garden",
    displayName: "Spa garden",
  },
  {
    name: "categories/gcid:spa_town",
    displayName: "Spa town",
  },
  {
    name: "categories/gcid:space_of_remembrance",
    displayName: "Space of remembrance",
  },
  {
    name: "categories/gcid:spanish_restaurant",
    displayName: "Spanish restaurant",
  },
  {
    name: "categories/gcid:special_education_school",
    displayName: "Special education school",
  },
  {
    name: "categories/gcid:specialized_clinic",
    displayName: "Specialised Clinic",
  },
  {
    name: "categories/gcid:specialized_hospital",
    displayName: "Specialised Hospital",
  },
  {
    name: "categories/gcid:speech_pathologist",
    displayName: "Speech & Hearing Specialist",
  },
  {
    name: "categories/gcid:sperm_bank",
    displayName: "Sperm bank",
  },
  {
    name: "categories/gcid:spice_store",
    displayName: "Spice Shop",
  },
  {
    name: "categories/gcid:spices_exporter",
    displayName: "Spices Exporter",
  },
  {
    name: "categories/gcid:spices_wholesalers",
    displayName: "Spices Wholesaler",
  },
  {
    name: "categories/gcid:spiritist_center",
    displayName: "Spiritist Centre",
  },
  {
    name: "categories/gcid:sport_tour_agency",
    displayName: "Sport tour agency",
  },
  {
    name: "categories/gcid:sporting_goods_store",
    displayName: "Sporting Goods Shop",
  },
  {
    name: "categories/gcid:sports_accessories_wholesaler",
    displayName: "Sports Accessories Wholesaler",
  },
  {
    name: "categories/gcid:sports_association",
    displayName: "Sports Association",
  },
  {
    name: "categories/gcid:sports_bar",
    displayName: "Sports bar",
  },
  {
    name: "categories/gcid:sports_card_store",
    displayName: "Sports Card Shop",
  },
  {
    name: "categories/gcid:sports_club",
    displayName: "Sports club",
  },
  {
    name: "categories/gcid:sports_complex",
    displayName: "Sports complex",
  },
  {
    name: "categories/gcid:sports_equipment_rental_service",
    displayName: "Sports Equipment Rental Agency",
  },
  {
    name: "categories/gcid:sports_massage_therapist",
    displayName: "Sports massage therapist",
  },
  {
    name: "categories/gcid:sports_medicine_clinic",
    displayName: "Sports medicine clinic",
  },
  {
    name: "categories/gcid:sports_medicine_physician",
    displayName: "Sports Medicine Doctor",
  },
  {
    name: "categories/gcid:sports_memorabilia_store",
    displayName: "Sports Memorabilia Shop",
  },
  {
    name: "categories/gcid:sports_nutrition_store",
    displayName: "Sports Nutrition Shop",
  },
  {
    name: "categories/gcid:sports_school",
    displayName: "Sports school",
  },
  {
    name: "categories/gcid:sportswear_store",
    displayName: "Sportswear Shop",
  },
  {
    name: "categories/gcid:sportwear_manufacturer",
    displayName: "Sportwear manufacturer",
  },
  {
    name: "categories/gcid:spring_supplier",
    displayName: "Spring supplier",
  },
  {
    name: "categories/gcid:squash_club",
    displayName: "Squash club",
  },
  {
    name: "categories/gcid:squash_court",
    displayName: "Squash court",
  },
  {
    name: "categories/gcid:sri_lankan_restaurant",
    displayName: "Sri Lankan restaurant",
  },
  {
    name: "categories/gcid:stable",
    displayName: "Stable",
  },
  {
    name: "categories/gcid:stadium",
    displayName: "Stadium",
  },
  {
    name: "categories/gcid:stage",
    displayName: "Stage",
  },
  {
    name: "categories/gcid:stage_lighting_equipment_supplier",
    displayName: "Stage lighting equipment supplier",
  },
  {
    name: "categories/gcid:stained_glass_studio",
    displayName: "Stained glass studio",
  },
  {
    name: "categories/gcid:stainless_steel_plant",
    displayName: "Stainless Steel Plant",
  },
  {
    name: "categories/gcid:stair_contractor",
    displayName: "Stair contractor",
  },
  {
    name: "categories/gcid:stall_installation_service",
    displayName: "Stall installation service",
  },
  {
    name: "categories/gcid:stamp_collectors_club",
    displayName: "Stamp collectors club",
  },
  {
    name: "categories/gcid:stamp_shop",
    displayName: "Stamp shop",
  },
  {
    name: "categories/gcid:stand_bar",
    displayName: "Stand bar",
  },
  {
    name: "categories/gcid:staple_food_package",
    displayName: "Staple food package",
  },
  {
    name: "categories/gcid:state_archive",
    displayName: "State archive",
  },
  {
    name: "categories/gcid:state_board_school",
    displayName: "State Board School",
  },
  {
    name: "categories/gcid:state_department_agricultural_development",
    displayName: "State department of agricultural development",
  },
  {
    name: "categories/gcid:state_department_agriculture_food_supply",
    displayName: "State Department Agriculture Food Supply",
  },
  {
    name: "categories/gcid:state_department_communication",
    displayName: "State Department Communication",
  },
  {
    name: "categories/gcid:state_department_finance",
    displayName: "State Department Finance",
  },
  {
    name: "categories/gcid:state_department_for_social_development",
    displayName: "State Department for Social Development",
  },
  {
    name: "categories/gcid:state_department_housing_and_urban_development",
    displayName: "State Department Housing and Urban Development",
  },
  {
    name: "categories/gcid:state_department_of_environment",
    displayName: "State Department of Environment",
  },
  {
    name: "categories/gcid:state_department_of_tourism",
    displayName: "State Department of Tourism",
  },
  {
    name: "categories/gcid:state_department_of_transportation",
    displayName: "State Department of Transportation",
  },
  {
    name: "categories/gcid:state_department_science_technology",
    displayName: "State Department Science Technology",
  },
  {
    name: "categories/gcid:state_department_social_defense",
    displayName: "State department of social defense",
  },
  {
    name: "categories/gcid:state_dept_of_culture",
    displayName: "State Dept of Culture",
  },
  {
    name: "categories/gcid:state_dept_of_sports",
    displayName: "State Dept of Sports",
  },
  {
    name: "categories/gcid:state_employment_department",
    displayName: "State employment department",
  },
  {
    name: "categories/gcid:state_government_office",
    displayName: "State government office",
  },
  {
    name: "categories/gcid:state_liquor_store",
    displayName: "Off-licence",
  },
  {
    name: "categories/gcid:state_office_of_education",
    displayName: "State office of education",
  },
  {
    name: "categories/gcid:state_owned_farm",
    displayName: "State owned farm",
  },
  {
    name: "categories/gcid:state_park",
    displayName: "State park",
  },
  {
    name: "categories/gcid:state_police",
    displayName: "State police",
  },
  {
    name: "categories/gcid:stationery_manufacturer",
    displayName: "Stationery manufacturer",
  },
  {
    name: "categories/gcid:stationery_store",
    displayName: "Stationery Shop",
  },
  {
    name: "categories/gcid:stationery_wholesaler",
    displayName: "Stationery wholesaler",
  },
  {
    name: "categories/gcid:statuary",
    displayName: "Statuary",
  },
  {
    name: "categories/gcid:std_clinic",
    displayName: "STD clinic",
  },
  {
    name: "categories/gcid:std_testing_service",
    displayName: "STD testing service",
  },
  {
    name: "categories/gcid:steak_house",
    displayName: "Steak house",
  },
  {
    name: "categories/gcid:steamboat_restaurant",
    displayName: "Steamboat restaurant",
  },
  {
    name: "categories/gcid:steamed_bun_shop",
    displayName: "Steamed bun shop",
  },
  {
    name: "categories/gcid:steel_construction_company",
    displayName: "Steel construction company",
  },
  {
    name: "categories/gcid:steel_distributor",
    displayName: "Steel distributor",
  },
  {
    name: "categories/gcid:steel_drum_supplier",
    displayName: "Steel drum supplier",
  },
  {
    name: "categories/gcid:steel_erector",
    displayName: "Steel erector",
  },
  {
    name: "categories/gcid:steel_fabricator",
    displayName: "Steel Fabricator",
  },
  {
    name: "categories/gcid:steel_framework_contractor",
    displayName: "Steel framework contractor",
  },
  {
    name: "categories/gcid:steelwork_design_company",
    displayName: "Steelwork design company",
  },
  {
    name: "categories/gcid:steelwork_manufacturer",
    displayName: "Steelwork manufacturer",
  },
  {
    name: "categories/gcid:stereo_rental_store",
    displayName: "Stereo Rental Shop",
  },
  {
    name: "categories/gcid:stereo_repair_service",
    displayName: "Stereo repair service",
  },
  {
    name: "categories/gcid:stereo_store",
    displayName: "Home audio shop",
  },
  {
    name: "categories/gcid:sticker_manufacturer",
    displayName: "Sticker Manufacturer",
  },
  {
    name: "categories/gcid:stitching_class",
    displayName: "Stitching Class",
  },
  {
    name: "categories/gcid:stock_broker",
    displayName: "Stock broker",
  },
  {
    name: "categories/gcid:stock_exchange_building",
    displayName: "Stock exchange building",
  },
  {
    name: "categories/gcid:stone_carving",
    displayName: "Stone carving",
  },
  {
    name: "categories/gcid:stone_cutter",
    displayName: "Stone cutter",
  },
  {
    name: "categories/gcid:stone_supplier",
    displayName: "Stone supplier",
  },
  {
    name: "categories/gcid:storage_facility",
    displayName: "Storage facility",
  },
  {
    name: "categories/gcid:store",
    displayName: "Shop",
  },
  {
    name: "categories/gcid:store_equipment_supplier",
    displayName: "Shop Equipment Supplier",
  },
  {
    name: "categories/gcid:stove_builder",
    displayName: "Stove builder",
  },
  {
    name: "categories/gcid:stringed_intrument_maker",
    displayName: "Luthier",
  },
  {
    name: "categories/gcid:structural_engineer",
    displayName: "Structural engineer",
  },
  {
    name: "categories/gcid:stucco_contractor",
    displayName: "Stucco contractor",
  },
  {
    name: "categories/gcid:student_career_counseling_office",
    displayName: "Student career counseling office",
  },
  {
    name: "categories/gcid:student_dormitory",
    displayName: "Hostel",
  },
  {
    name: "categories/gcid:student_housing_center",
    displayName: "Student Accommodation Centre",
  },
  {
    name: "categories/gcid:student_union",
    displayName: "Student union",
  },
  {
    name: "categories/gcid:students_parents_association",
    displayName: "Students parents association",
  },
  {
    name: "categories/gcid:students_support_association",
    displayName: "Students support association",
  },
  {
    name: "categories/gcid:study_at_home_school",
    displayName: "Study at home school",
  },
  {
    name: "categories/gcid:studying_center",
    displayName: "Studying Centre",
  },
  {
    name: "categories/gcid:stylist",
    displayName: "Stylist",
  },
  {
    name: "categories/gcid:subaru_dealer",
    displayName: "Subaru dealer",
  },
  {
    name: "categories/gcid:suburban_train_line",
    displayName: "Suburban train line",
  },
  {
    name: "categories/gcid:sugar_factory",
    displayName: "Sugar factory",
  },
  {
    name: "categories/gcid:sugar_shack",
    displayName: "Sugar shack",
  },
  {
    name: "categories/gcid:sukiyaki_restaurant",
    displayName: "Sukiyaki restaurant",
  },
  {
    name: "categories/gcid:summer_camp",
    displayName: "Summer camp",
  },
  {
    name: "categories/gcid:summer_toboggan_run",
    displayName: "Summer toboggan run",
  },
  {
    name: "categories/gcid:sundae_restaurant",
    displayName: "Sundae restaurant",
  },
  {
    name: "categories/gcid:sundanese_restaurant",
    displayName: "Sundanese restaurant",
  },
  {
    name: "categories/gcid:sunglasses_store",
    displayName: "Sunglasses Shop",
  },

  {
    name: "categories/gcid:super_public_bath",
    displayName: "Super public bath",
  },
  {
    name: "categories/gcid:superannuation_consultant",
    displayName: "Superannuation Consultant",
  },
  {
    name: "categories/gcid:superfund_site",
    displayName: "US Superfund Site",
  },
  {
    name: "categories/gcid:supermarket",
    displayName: "Supermarket",
  },
  {
    name: "categories/gcid:support_group",
    displayName: "Support group",
  },
  {
    name: "categories/gcid:surf_lifesaving_club",
    displayName: "Surf lifesaving club",
  },
  {
    name: "categories/gcid:surf_school",
    displayName: "Surf school",
  },
  {
    name: "categories/gcid:surf_shop",
    displayName: "Surf shop",
  },
  {
    name: "categories/gcid:surgeon",
    displayName: "Surgeon",
  },
  {
    name: "categories/gcid:surgical_center",
    displayName: "Surgical Clinic",
  },
  {
    name: "categories/gcid:surgical_oncologist",
    displayName: "Surgical oncologist",
  },
  {
    name: "categories/gcid:surgical_products_wholesaler",
    displayName: "Surgical Products Wholesaler",
  },
  {
    name: "categories/gcid:surgical_supply_store",
    displayName: "Surgical Supply Shop",
  },
  {
    name: "categories/gcid:surinamese_restaurant",
    displayName: "Surinamese restaurant",
  },
  {
    name: "categories/gcid:surplus_store",
    displayName: "Outlet",
  },
  {
    name: "categories/gcid:surveyor",
    displayName: "Surveyor",
  },
  {
    name: "categories/gcid:sushi_restaurant",
    displayName: "Sushi restaurant",
  },
  {
    name: "categories/gcid:sushi_takeaway",
    displayName: "Sushi takeaway",
  },
  {
    name: "categories/gcid:suzuki_dealer",
    displayName: "Suzuki dealer",
  },
  {
    name: "categories/gcid:swabian_restaurant",
    displayName: "Swabian restaurant",
  },
  {
    name: "categories/gcid:swedish_restaurant",
    displayName: "Swedish restaurant",
  },
  {
    name: "categories/gcid:swim_club",
    displayName: "Swimming Club",
  },
  {
    name: "categories/gcid:swimming_basin",
    displayName: "Swimming basin",
  },
  {
    name: "categories/gcid:swimming_competition",
    displayName: "Swimming competition",
  },
  {
    name: "categories/gcid:swimming_facility",
    displayName: "Swimming facility",
  },
  {
    name: "categories/gcid:swimming_instructor",
    displayName: "Swimming instructor",
  },
  {
    name: "categories/gcid:swimming_lake",
    displayName: "Swimming lake",
  },
  {
    name: "categories/gcid:swimming_pool",
    displayName: "Swimming pool",
  },
  {
    name: "categories/gcid:swimming_pool_contractor",
    displayName: "Swimming pool contractor",
  },
  {
    name: "categories/gcid:swimming_pool_repair_service",
    displayName: "Swimming pool repair service",
  },
  {
    name: "categories/gcid:swimming_pool_supply_store",
    displayName: "Swimming pool supply shop",
  },
  {
    name: "categories/gcid:swimming_school",
    displayName: "Swimming school",
  },
  {
    name: "categories/gcid:swimwear_store",
    displayName: "Swimwear Shop",
  },
  {
    name: "categories/gcid:swiss_restaurant",
    displayName: "Swiss restaurant",
  },
  {
    name: "categories/gcid:synagogue",
    displayName: "Synagogue",
  },
  {
    name: "categories/gcid:syrian_restaurant",
    displayName: "Syrian restaurant",
  },
  {
    name: "categories/gcid:t_shirt_store",
    displayName: "T-shirt Shop",
  },
  {
    name: "categories/gcid:tabascan_restaurant",
    displayName: "Tabascan restaurant",
  },
  {
    name: "categories/gcid:table_tennis_club",
    displayName: "Table tennis club",
  },
  {
    name: "categories/gcid:table_tennis_facility",
    displayName: "Table tennis facility",
  },
  {
    name: "categories/gcid:table_tennis_supply_store",
    displayName: "Table Tennis Supply Shop",
  },
  {
    name: "categories/gcid:tacaca_restaurant",
    displayName: "Tacaca restaurant",
  },
  {
    name: "categories/gcid:tack_shop",
    displayName: "Tack shop",
  },
  {
    name: "categories/gcid:taco_restaurant",
    displayName: "Taco restaurant",
  },
  {
    name: "categories/gcid:tae_kwon_do_comp_area",
    displayName: "Taekwondo competition area",
  },
  {
    name: "categories/gcid:taekwondo_school",
    displayName: "Taekwondo Coaching Center",
  },
  {
    name: "categories/gcid:tag_agency",
    displayName: "Tag agency",
  },
  {
    name: "categories/gcid:tai_chi_school",
    displayName: "Tai chi school",
  },
  {
    name: "categories/gcid:tailor",
    displayName: "Tailor",
  },
  {
    name: "categories/gcid:taiwanese_restaurant",
    displayName: "Taiwanese restaurant",
  },
  {
    name: "categories/gcid:takoyaki_stand",
    displayName: "Takoyaki restaurant",
  },
  {
    name: "categories/gcid:talent_agency",
    displayName: "Talent agency",
  },
  {
    name: "categories/gcid:tamale_shop",
    displayName: "Tamale shop",
  },
  {
    name: "categories/gcid:tannery",
    displayName: "Tannery",
  },
  {
    name: "categories/gcid:tanning_studio",
    displayName: "Tanning salon",
  },
  {
    name: "categories/gcid:taoist_temple",
    displayName: "Taoist temple",
  },
  {
    name: "categories/gcid:tapas_bar",
    displayName: "Tapas bar",
  },
  {
    name: "categories/gcid:tapas_restaurant",
    displayName: "Tapas restaurant",
  },
  {
    name: "categories/gcid:tata_motors_dealer",
    displayName: "Tata Motors dealer",
  },
  {
    name: "categories/gcid:tatami_store",
    displayName: "Tatami Shop",
  },
  {
    name: "categories/gcid:tattoo_and_piercing_shop",
    displayName: "Tattoo and piercing shop",
  },
  {
    name: "categories/gcid:tattoo_artist",
    displayName: "Tattoo artist",
  },
  {
    name: "categories/gcid:tattoo_removal_service",
    displayName: "Tattoo-Removal Service",
  },
  {
    name: "categories/gcid:tattoo_shop",
    displayName: "Tattoo shop",
  },
  {
    name: "categories/gcid:tax_assessor",
    displayName: "Tax assessor",
  },
  {
    name: "categories/gcid:tax_attorney",
    displayName: "Tax Lawyer",
  },
  {
    name: "categories/gcid:tax_collectors_office",
    displayName: "Tax Office",
  },
  {
    name: "categories/gcid:tax_consultant",
    displayName: "Tax Advisor",
  },
  {
    name: "categories/gcid:tax_department",
    displayName: "Tax Department",
  },
  {
    name: "categories/gcid:tax_preparation",
    displayName: "Tax preparation",
  },
  {
    name: "categories/gcid:tax_preparation_service",
    displayName: "Tax preparation service",
  },
  {
    name: "categories/gcid:taxi_service",
    displayName: "Taxi service",
  },
  {
    name: "categories/gcid:taxi_stand",
    displayName: "Taxi rank",
  },
  {
    name: "categories/gcid:taxidermist",
    displayName: "Taxidermist",
  },
  {
    name: "categories/gcid:tb_clinic",
    displayName: "TB clinic",
  },
  {
    name: "categories/gcid:tea_exporter",
    displayName: "Tea Exporter",
  },
  {
    name: "categories/gcid:tea_house",
    displayName: "Tea room",
  },
  {
    name: "categories/gcid:tea_manufacturer",
    displayName: "Tea Manufacturer",
  },
  {
    name: "categories/gcid:tea_market_place",
    displayName: "Tea market place",
  },
  {
    name: "categories/gcid:tea_store",
    displayName: "Tea Shop",
  },
  {
    name: "categories/gcid:tea_wholesaler",
    displayName: "Tea Wholesaler",
  },
  {
    name: "categories/gcid:teacher_college",
    displayName: "Teacher College",
  },
  {
    name: "categories/gcid:teachers_housing",
    displayName: "Teachers' housing",
  },
  {
    name: "categories/gcid:technical_school",
    displayName: "College of Technology",
  },
  {
    name: "categories/gcid:technical_university",
    displayName: "Technical university",
  },
  {
    name: "categories/gcid:technology_museum",
    displayName: "Technology museum",
  },
  {
    name: "categories/gcid:technology_park",
    displayName: "Technology park",
  },
  {
    name: "categories/gcid:teeth_whitening_service",
    displayName: "Teeth whitening service",
  },
  {
    name: "categories/gcid:tegal_restaurant",
    displayName: "Tegal restaurant",
  },
  {
    name: "categories/gcid:telecommunication_school",
    displayName: "Telecommunication school",
  },
  {
    name: "categories/gcid:telecommunications_contractor",
    displayName: "Telecommunications contractor",
  },
  {
    name: "categories/gcid:telecommunications_engineer",
    displayName: "Telecommunications engineer",
  },
  {
    name: "categories/gcid:telecommunications_equipment_supplier",
    displayName: "Telecommunications equipment supplier",
  },
  {
    name: "categories/gcid:telecommunications_service_provider",
    displayName: "Telecommunications service provider",
  },
  {
    name: "categories/gcid:telemarketing_service",
    displayName: "Telephone Marketing Agency",
  },
  {
    name: "categories/gcid:telephone_answering_service",
    displayName: "Telephone answering service",
  },
  {
    name: "categories/gcid:telephone_company",
    displayName: "Telephone company",
  },
  {
    name: "categories/gcid:telephone_exchange",
    displayName: "Telephone exchange",
  },
  {
    name: "categories/gcid:telescope_store",
    displayName: "Telescope Shop",
  },
  {
    name: "categories/gcid:television_repair_service",
    displayName: "Television repair service",
  },
  {
    name: "categories/gcid:television_station",
    displayName: "Television Channel",
  },
  {
    name: "categories/gcid:temaki_restaurant",
    displayName: "Temaki restaurant",
  },
  {
    name: "categories/gcid:temp_agency",
    displayName: "Temp agency",
  },
  {
    name: "categories/gcid:tempura_bowl_restaurants",
    displayName: "Tempura donburi restaurant",
  },
  {
    name: "categories/gcid:tempura_dish_restaurant",
    displayName: "Tempura restaurant",
  },
  {
    name: "categories/gcid:tenant_ownership",
    displayName: "Tenant ownership",
  },
  {
    name: "categories/gcid:tenants_union",
    displayName: "Tenant's union",
  },
  {
    name: "categories/gcid:tennis_club",
    displayName: "Tennis club",
  },
  {
    name: "categories/gcid:tennis_court",
    displayName: "Tennis court",
  },
  {
    name: "categories/gcid:tennis_court_construction_company",
    displayName: "Tennis court construction company",
  },
  {
    name: "categories/gcid:tennis_instructor",
    displayName: "Tennis instructor",
  },
  {
    name: "categories/gcid:tennis_store",
    displayName: "Tennis Shop",
  },
  {
    name: "categories/gcid:tent_rental_service",
    displayName: "Tent House Supplier",
  },
  {
    name: "categories/gcid:teppan_grill_restaurant",
    displayName: "Teppanyaki restaurant",
  },
  {
    name: "categories/gcid:tesla_showroom",
    displayName: "Tesla showroom",
  },
  {
    name: "categories/gcid:tex_mex_restaurant",
    displayName: "Tex-Mex restaurant",
  },
  {
    name: "categories/gcid:textile_engineer",
    displayName: "Textile Engineer",
  },
  {
    name: "categories/gcid:textile_exporter",
    displayName: "Textile Exporter",
  },
  {
    name: "categories/gcid:textile_mill",
    displayName: "Textile mill",
  },
  {
    name: "categories/gcid:thai_massage_therapist",
    displayName: "Thai massage therapist",
  },
  {
    name: "categories/gcid:thai_restaurant",
    displayName: "Thai restaurant",
  },
  {
    name: "categories/gcid:theater_company",
    displayName: "Theatre Company",
  },
  {
    name: "categories/gcid:theater_production",
    displayName: "Theater production",
  },
  {
    name: "categories/gcid:theater_supply_store",
    displayName: "Theatrical Supplies Shop",
  },
  {
    name: "categories/gcid:theatrical_costume_supplier",
    displayName: "Theatrical costume supplier",
  },
  {
    name: "categories/gcid:theme_park",
    displayName: "Theme park",
  },
  {
    name: "categories/gcid:thermal_baths",
    displayName: "Thermal Baths",
  },
  {
    name: "categories/gcid:thermal_energy_company",
    displayName: "Thermal Energy Company",
  },
  {
    name: "categories/gcid:thread_supplier",
    displayName: "Thread Supplier",
  },
  {
    name: "categories/gcid:threads_and_yarns_wholesaler",
    displayName: "Threads & Yarns Wholesaler",
  },
  {
    name: "categories/gcid:three_d_printing_service",
    displayName: "3D printing service",
  },
  {
    name: "categories/gcid:thrift_store",
    displayName: "Charity shop",
  },
  {
    name: "categories/gcid:thuringian_restaurant",
    displayName: "Thuringian restaurant",
  },
  {
    name: "categories/gcid:tibetan_restaurant",
    displayName: "Tibetan restaurant",
  },
  {
    name: "categories/gcid:tiffin_center",
    displayName: "Tiffin center",
  },
  {
    name: "categories/gcid:tiki_bar",
    displayName: "Tiki bar",
  },
  {
    name: "categories/gcid:tile_contractor",
    displayName: "Tile contractor",
  },
  {
    name: "categories/gcid:tile_manufacturer",
    displayName: "Tile manufacturer",
  },
  {
    name: "categories/gcid:tile_store",
    displayName: "Tile Shop",
  },
  {
    name: "categories/gcid:timeshare_agency",
    displayName: "Timeshare agency",
  },
  {
    name: "categories/gcid:tire_manufacturer",
    displayName: "Tyre manufacturer",
  },
  {
    name: "categories/gcid:tire_repair_shop",
    displayName: "Tire repair shop",
  },
  {
    name: "categories/gcid:tire_shop",
    displayName: "Tyre Shop",
  },
  {
    name: "categories/gcid:title_company",
    displayName: "Title company",
  },
  {
    name: "categories/gcid:toast_restaurant",
    displayName: "Toast restaurant",
  },
  {
    name: "categories/gcid:tobacco_exporter",
    displayName: "Tobacco Exporter",
  },
  {
    name: "categories/gcid:tobacco_shop",
    displayName: "Tobacco shop",
  },
  {
    name: "categories/gcid:tobacco_supplier",
    displayName: "Tobacco supplier",
  },
  {
    name: "categories/gcid:tofu_restaurant",
    displayName: "Tofu restaurant",
  },
  {
    name: "categories/gcid:tofu_shop",
    displayName: "Tofu shop",
  },
  {
    name: "categories/gcid:toiletries_store",
    displayName: "Toiletries Store",
  },
  {
    name: "categories/gcid:toll_road_rest_stop",
    displayName: "Toll road services",
  },
  {
    name: "categories/gcid:toll_station",
    displayName: "Toll booth",
  },
  {
    name: "categories/gcid:toner_cartridge_supplier",
    displayName: "Toner Cartridge Supplier",
  },
  {
    name: "categories/gcid:tongue_restaurant",
    displayName: "Tongue restaurant",
  },
  {
    name: "categories/gcid:tonkatsu_restaurant",
    displayName: "Tonkatsu restaurant",
  },
  {
    name: "categories/gcid:tool_and_die_shop",
    displayName: "Tool & die shop",
  },
  {
    name: "categories/gcid:tool_exporter",
    displayName: "Tool Exporter",
  },
  {
    name: "categories/gcid:tool_grinding_service",
    displayName: "Tool grinding service",
  },
  {
    name: "categories/gcid:tool_manufacturer",
    displayName: "Tool manufacturer",
  },
  {
    name: "categories/gcid:tool_rental_service",
    displayName: "Tool rental service",
  },
  {
    name: "categories/gcid:tool_repair_shop",
    displayName: "Tool repair shop",
  },
  {
    name: "categories/gcid:tool_store",
    displayName: "Tool Shop",
  },
  {
    name: "categories/gcid:tool_wholesaler",
    displayName: "Tools Wholesaler",
  },
  {
    name: "categories/gcid:toolroom",
    displayName: "Toolroom",
  },
  {
    name: "categories/gcid:topography_company",
    displayName: "Topography company",
  },
  {
    name: "categories/gcid:topsoil_supplier",
    displayName: "Topsoil supplier",
  },
  {
    name: "categories/gcid:tortilla_shop",
    displayName: "Tortilla shop",
  },
  {
    name: "categories/gcid:tour_agency",
    displayName: "Tours",
  },
  {
    name: "categories/gcid:tour_operator",
    displayName: "Tour operator",
  },
  {
    name: "categories/gcid:tourism_development_corporation",
    displayName: "Tourism Development Corporation",
  },
  {
    name: "categories/gcid:tourist_attraction",
    displayName: "Tourist attraction",
  },
  {
    name: "categories/gcid:tourist_information_center",
    displayName: "Tourist Information Centre",
  },
  {
    name: "categories/gcid:tower_communication_service",
    displayName: "Communications tower",
  },
  {
    name: "categories/gcid:towing_equipment_provider",
    displayName: "Towing equipment provider",
  },
  {
    name: "categories/gcid:towing_service",
    displayName: "Towing service",
  },
  {
    name: "categories/gcid:townhouse_complex",
    displayName: "Townhouse complex",
  },
  {
    name: "categories/gcid:toy_and_game_manufacturer",
    displayName: "Toy and game manufacturer",
  },
  {
    name: "categories/gcid:toy_library",
    displayName: "Toy library",
  },
  {
    name: "categories/gcid:toy_manufacturer",
    displayName: "Toy manufacturer",
  },
  {
    name: "categories/gcid:toy_museum",
    displayName: "Toy museum",
  },
  {
    name: "categories/gcid:toy_store",
    displayName: "Toy Shop",
  },
  {
    name: "categories/gcid:toyota_dealer",
    displayName: "Toyota dealer",
  },
  {
    name: "categories/gcid:tractor_dealer",
    displayName: "Tractor dealer",
  },
  {
    name: "categories/gcid:tractor_repair_shop",
    displayName: "Tractor repair shop",
  },
  {
    name: "categories/gcid:trade_fair_construction_company",
    displayName: "Trade fair construction company",
  },
  {
    name: "categories/gcid:trade_school",
    displayName: "Trade school",
  },
  {
    name: "categories/gcid:trading_card_store",
    displayName: "Trading Card Shop",
  },
  {
    name: "categories/gcid:traditional_costume_club",
    displayName: "Traditional costume club",
  },
  {
    name: "categories/gcid:traditional_kostume_store",
    displayName: "Traditional Kostume Shop",
  },
  {
    name: "categories/gcid:traditional_market",
    displayName: "Traditional market",
  },
  {
    name: "categories/gcid:traditional_restaurant",
    displayName: "Traditional restaurant",
  },
  {
    name: "categories/gcid:traditional_teahouse",
    displayName: "Traditional teahouse",
  },
  {
    name: "categories/gcid:traditional_us_american_restaurant",
    displayName: "Traditional American restaurant",
  },
  {
    name: "categories/gcid:traffic_officer",
    displayName: "Traffic officer",
  },
  {
    name: "categories/gcid:trailer_dealer",
    displayName: "Trailer dealer",
  },
  {
    name: "categories/gcid:trailer_manufacturer",
    displayName: "Trailer manufacturer",
  },
  {
    name: "categories/gcid:trailer_rental_service",
    displayName: "Trailer rental service",
  },
  {
    name: "categories/gcid:trailer_repair_shop",
    displayName: "Trailer repair shop",
  },
  {
    name: "categories/gcid:trailer_supply_store",
    displayName: "Trailer Supply Shop",
  },
  {
    name: "categories/gcid:train_depot",
    displayName: "Train depot",
  },
  {
    name: "categories/gcid:train_repairing_center",
    displayName: "Train Repairing Centre",
  },
  {
    name: "categories/gcid:train_ticket_agency",
    displayName: "Railway Ticket Agent",
  },
  {
    name: "categories/gcid:train_ticket_counter",
    displayName: "Train ticket office",
  },
  {
    name: "categories/gcid:train_yard",
    displayName: "Rail depot",
  },
  {
    name: "categories/gcid:training_center",
    displayName: "Training centre",
  },
  {
    name: "categories/gcid:training_school",
    displayName: "Training school",
  },
  {
    name: "categories/gcid:transcription_service",
    displayName: "Transcription service",
  },
  {
    name: "categories/gcid:transit_depot",
    displayName: "Transit depot",
  },
  {
    name: "categories/gcid:translator",
    displayName: "Translator",
  },
  {
    name: "categories/gcid:transmission_shop",
    displayName: "Transmission shop",
  },
  {
    name: "categories/gcid:transplant_surgeon",
    displayName: "Transplant surgeon",
  },
  {
    name: "categories/gcid:transportation_escort_service",
    displayName: "Transportation escort service",
  },
  {
    name: "categories/gcid:transportation_service",
    displayName: "Transportation service",
  },
  {
    name: "categories/gcid:travel_agency",
    displayName: "Travel Agent",
  },
  {
    name: "categories/gcid:travel_clinic",
    displayName: "Travel clinic",
  },
  {
    name: "categories/gcid:travel_lounge",
    displayName: "Travel lounge",
  },
  {
    name: "categories/gcid:tree_farm",
    displayName: "Tree farm",
  },
  {
    name: "categories/gcid:tree_service",
    displayName: "Tree service",
  },
  {
    name: "categories/gcid:trial_attorney",
    displayName: "Trial Lawyer",
  },
  {
    name: "categories/gcid:tribal_headquarters",
    displayName: "Tribal headquarters",
  },
  {
    name: "categories/gcid:trophy_shop",
    displayName: "Trophy shop",
  },
  {
    name: "categories/gcid:tropical_fish_store",
    displayName: "Tropical Fish Shop",
  },
  {
    name: "categories/gcid:truck_accessories_store",
    displayName: "Van Accessories Shop",
  },
  {
    name: "categories/gcid:truck_dealer",
    displayName: "Truck dealer",
  },
  {
    name: "categories/gcid:truck_farmer",
    displayName: "Truck farmer",
  },
  {
    name: "categories/gcid:truck_parts_supplier",
    displayName: "Truck parts supplier",
  },
  {
    name: "categories/gcid:truck_rental_agency",
    displayName: "Truck rental agency",
  },
  {
    name: "categories/gcid:truck_repair_shop",
    displayName: "Truck repair shop",
  },
  {
    name: "categories/gcid:truck_stop",
    displayName: "Motorway Services",
  },
  {
    name: "categories/gcid:truck_topper_supplier",
    displayName: "Truck Topper Supplier",
  },
  {
    name: "categories/gcid:trucking_company",
    displayName: "Trucking company",
  },
  {
    name: "categories/gcid:trucking_school",
    displayName: "Trucking school",
  },
  {
    name: "categories/gcid:truss_manufacturer",
    displayName: "Truss manufacturer",
  },
  {
    name: "categories/gcid:trust_bank",
    displayName: "Trust bank",
  },
  {
    name: "categories/gcid:tsukigime_parking_lot",
    displayName: "Tsukigime Car Perk",
  },
  {
    name: "categories/gcid:tubewell_contractor",
    displayName: "Tubewell Contractor",
  },
  {
    name: "categories/gcid:tune_up_supplier",
    displayName: "Tune up supplier",
  },
  {
    name: "categories/gcid:tuning_automobile",
    displayName: "Tuning automobile",
  },
  {
    name: "categories/gcid:tunisian_restaurant",
    displayName: "Tunisian restaurant",
  },
  {
    name: "categories/gcid:turf_supplier",
    displayName: "Turf and Soil Supplier",
  },
  {
    name: "categories/gcid:turkish_restaurant",
    displayName: "Turkish restaurant",
  },
  {
    name: "categories/gcid:turkmen_restaurant",
    displayName: "Turkmen restaurant",
  },
  {
    name: "categories/gcid:turnery",
    displayName: "Turnery",
  },
  {
    name: "categories/gcid:tuscan_restaurant",
    displayName: "Tuscan restaurant",
  },
  {
    name: "categories/gcid:tutoring_service",
    displayName: "Tutor",
  },
  {
    name: "categories/gcid:tuxedo_shop",
    displayName: "Formal menswear shop",
  },
  {
    name: "categories/gcid:typewriter_repair_service",
    displayName: "Typewriter repair service",
  },
  {
    name: "categories/gcid:typewriter_supplier",
    displayName: "Typewriter supplier",
  },
  {
    name: "categories/gcid:typing_service",
    displayName: "Typist",
  },
  {
    name: "categories/gcid:udon_noodle_shop",
    displayName: "Udon noodle restaurant",
  },
  {
    name: "categories/gcid:ukrainian_restaurant",
    displayName: "Ukrainian restaurant",
  },
  {
    name: "categories/gcid:unagi_restaurant",
    displayName: "Unagi restaurant",
  },
  {
    name: "categories/gcid:underwear_store",
    displayName: "Underwear Shop",
  },

  {
    name: "categories/gcid:unfinished_furniture_store",
    displayName: "Unfinished Furniture Shop",
  },
  {
    name: "categories/gcid:uniform_store",
    displayName: "Uniform Shop",
  },
  {
    name: "categories/gcid:unitarian_universalist_church",
    displayName: "Unitarian Universalist Church",
  },
  {
    name: "categories/gcid:united_church_of_canada",
    displayName: "United Church of Canada",
  },
  {
    name: "categories/gcid:united_church_of_christ",
    displayName: "United Church of Christ",
  },
  {
    name: "categories/gcid:united_methodist_church",
    displayName: "United Methodist church",
  },
  {
    name: "categories/gcid:united_states_armed_forces_base",
    displayName: "United States Armed Forces Base",
  },
  {
    name: "categories/gcid:unity_church",
    displayName: "Unity church",
  },
  {
    name: "categories/gcid:university",
    displayName: "University",
  },
  {
    name: "categories/gcid:university_department",
    displayName: "University department",
  },
  {
    name: "categories/gcid:university_hospital",
    displayName: "University hospital",
  },
  {
    name: "categories/gcid:university_library",
    displayName: "University library",
  },
  {
    name: "categories/gcid:upholstery_cleaning_service",
    displayName: "Upholstery cleaning service",
  },
  {
    name: "categories/gcid:upholstery_shop",
    displayName: "Upholstery shop",
  },
  {
    name: "categories/gcid:urban_planning_department",
    displayName: "Urban planning department",
  },
  {
    name: "categories/gcid:urgent_care_center",
    displayName: "Urgent care centre",
  },
  {
    name: "categories/gcid:urologist",
    displayName: "Urologist",
  },
  {
    name: "categories/gcid:urology_clinic",
    displayName: "Urology Clinic",
  },
  {
    name: "categories/gcid:uruguayan_restaurant",
    displayName: "Uruguayan restaurant",
  },
  {
    name: "categories/gcid:us_pacific_northwest_restaurant",
    displayName: "Pacific Northwest restaurant (US)",
  },
  {
    name: "categories/gcid:used_appliance_store",
    displayName: "Used Appliance Shop",
  },
  {
    name: "categories/gcid:used_auto_parts_store",
    displayName: "Used Vehicle Parts Shop",
  },
  {
    name: "categories/gcid:used_bicycle_shop",
    displayName: "Second-hand bicycle shop",
  },
  {
    name: "categories/gcid:used_book_store",
    displayName: "Second-hand Book Shop",
  },
  {
    name: "categories/gcid:used_car_dealer",
    displayName: "Used car dealer",
  },
  {
    name: "categories/gcid:used_cd_store",
    displayName: "Second-hand CD Shop",
  },
  {
    name: "categories/gcid:used_clothing_store",
    displayName: "Second-hand Clothing Shop",
  },
  {
    name: "categories/gcid:used_computer_store",
    displayName: "Second-hand Computer Shop",
  },
  {
    name: "categories/gcid:used_furniture_store",
    displayName: "Second-hand furniture shop",
  },
  {
    name: "categories/gcid:used_game_store",
    displayName: "Used Game Shop",
  },
  {
    name: "categories/gcid:used_motorcycle_dealer",
    displayName: "Second-hand Motorcycle Dealer",
  },
  {
    name: "categories/gcid:used_musical_instrument_store",
    displayName: "Used Musical Instrument Shop",
  },
  {
    name: "categories/gcid:used_office_furniture_store",
    displayName: "Used Office Furniture Shop",
  },
  {
    name: "categories/gcid:used_store_fixture_supplier",
    displayName: "Used store fixture supplier",
  },
  {
    name: "categories/gcid:used_tire_shop",
    displayName: "Used Tyre Shop",
  },
  {
    name: "categories/gcid:used_truck_dealer",
    displayName: "Used truck dealer",
  },
  {
    name: "categories/gcid:utility_contractor",
    displayName: "Utilities contractor",
  },
  {
    name: "categories/gcid:utility_trailer_dealer",
    displayName: "Utility trailer dealer",
  },
  {
    name: "categories/gcid:uzbek_restaurant",
    displayName: "Uzbeki restaurant",
  },
  {
    name: "categories/gcid:vacation_appartment",
    displayName: "Holiday Flat",
  },
  {
    name: "categories/gcid:vacation_home_rental_agency",
    displayName: "Holiday home letting agency",
  },
  {
    name: "categories/gcid:vacuum_cleaner_repair_shop",
    displayName: "Vacuum cleaner repair shop",
  },
  {
    name: "categories/gcid:vacuum_cleaner_store",
    displayName: "Vacuum Cleaner Shop",
  },
  {
    name: "categories/gcid:vacuum_cleaning_system_supplier",
    displayName: "Vacuum System Supplier",
  },
  {
    name: "categories/gcid:valencian_restaurant",
    displayName: "Valencian restaurant",
  },
  {
    name: "categories/gcid:valet_parking_service",
    displayName: "Valet parking service",
  },
  {
    name: "categories/gcid:van_rental_agency",
    displayName: "Van rental agency",
  },
  {
    name: "categories/gcid:vaporizer_store",
    displayName: "Vaporiser Shop",
  },
  {
    name: "categories/gcid:variety_store",
    displayName: "Variety Shop",
  },
  {
    name: "categories/gcid:vascular_surgeon",
    displayName: "Vascular surgeon",
  },
  {
    name: "categories/gcid:vastu_consultant",
    displayName: "Vastu consultant",
  },
  {
    name: "categories/gcid:vcr_repair_service",
    displayName: "Video Player Repair Service",
  },
  {
    name: "categories/gcid:vegan_restaurant",
    displayName: "Vegan restaurant",
  },
  {
    name: "categories/gcid:vegetable_wholesale_market",
    displayName: "Vegetable wholesale market",
  },
  {
    name: "categories/gcid:vegetable_wholesaler",
    displayName: "Fruits & Vegetable Wholesaler",
  },
  {
    name: "categories/gcid:vegetarian_cafe_and_deli",
    displayName: "Vegetarian cafe and deli",
  },
  {
    name: "categories/gcid:vegetarian_restaurant",
    displayName: "Vegetarian restaurant",
  },
  {
    name: "categories/gcid:vehicle_examination_office",
    displayName: "Vehicle examination office",
  },
  {
    name: "categories/gcid:vehicle_exporter",
    displayName: "Vehicle Exporter",
  },
  {
    name: "categories/gcid:vehicle_inspection",
    displayName: "Vehicle inspection",
  },
  {
    name: "categories/gcid:vehicle_shipping_agent",
    displayName: "Vehicle Shipping Agent",
  },
  {
    name: "categories/gcid:vehicle_wrapping_service",
    displayName: "Vehicle wrapping service",
  },
  {
    name: "categories/gcid:velodrome",
    displayName: "Velodrome",
  },
  {
    name: "categories/gcid:vending_machine_supplier",
    displayName: "Vending machine supplier",
  },
  {
    name: "categories/gcid:venereologist",
    displayName: "Venereologist",
  },
  {
    name: "categories/gcid:venetian_restaurant",
    displayName: "Venetian restaurant",
  },
  {
    name: "categories/gcid:venezuelan_restaurant",
    displayName: "Venezuelan restaurant",
  },
  {
    name: "categories/gcid:ventilating_equipment_manufacturer",
    displayName: "Ventilating Equipment Manufacturer",
  },
  {
    name: "categories/gcid:venture_capital_company",
    displayName: "Venture Capital Fund",
  },
  {
    name: "categories/gcid:veterans_affairs_department",
    displayName: "Veterans Affairs Department",
  },
  {
    name: "categories/gcid:veterans_center",
    displayName: "Veterans Centre",
  },
  {
    name: "categories/gcid:veterans_hospital",
    displayName: "Veterans hospital",
  },
  {
    name: "categories/gcid:veterans_organization",
    displayName: "Veterans' Organisation",
  },
  {
    name: "categories/gcid:veterinarian",
    displayName: "Veterinarian",
  },
  {
    name: "categories/gcid:veterinary_pharmacy",
    displayName: "Veterinary pharmacy",
  },
  {
    name: "categories/gcid:video_arcade",
    displayName: "Video arcade",
  },
  {
    name: "categories/gcid:video_camera_repair_service",
    displayName: "Video camera repair service",
  },
  {
    name: "categories/gcid:video_conferencing_equipment_supplier",
    displayName: "Video conferencing equipment supplier",
  },
  {
    name: "categories/gcid:video_conferencing_service",
    displayName: "Video Conferencing Service Provider",
  },
  {
    name: "categories/gcid:video_duplication_service",
    displayName: "Video Duplication Service Provider",
  },
  {
    name: "categories/gcid:video_editing_service",
    displayName: "Video editing service",
  },
  {
    name: "categories/gcid:video_equipment_repair_service",
    displayName: "Video equipment repair service",
  },
  {
    name: "categories/gcid:video_game_rental_kiosk",
    displayName: "Video game rental kiosk",
  },
  {
    name: "categories/gcid:video_game_rental_service",
    displayName: "Video Game Rental Agency",
  },
  {
    name: "categories/gcid:video_game_rental_store",
    displayName: "Video game rental store",
  },
  {
    name: "categories/gcid:video_game_store",
    displayName: "Video Game Shop",
  },
  {
    name: "categories/gcid:video_karaoke",
    displayName: "Video karaoke",
  },
  {
    name: "categories/gcid:video_production_service",
    displayName: "Video production service",
  },
  {
    name: "categories/gcid:video_store",
    displayName: "Video shop",
  },
  {
    name: "categories/gcid:vietnamese_restaurant",
    displayName: "Vietnamese restaurant",
  },
  {
    name: "categories/gcid:villa",
    displayName: "Villa",
  },
  {
    name: "categories/gcid:village_hall",
    displayName: "Village hall",
  },
  {
    name: "categories/gcid:vineyard",
    displayName: "Vineyard",
  },
  {
    name: "categories/gcid:vineyard_church",
    displayName: "Vineyard church",
  },
  {
    name: "categories/gcid:vintage_clothing_store",
    displayName: "Vintage Clothing Shop",
  },
  {
    name: "categories/gcid:vinyl_sign_shop",
    displayName: "Vinyl sign shop",
  },
  {
    name: "categories/gcid:violin_shop",
    displayName: "Violin shop",
  },
  {
    name: "categories/gcid:virtual_office_rental",
    displayName: "Virtual office rental",
  },
  {
    name: "categories/gcid:visa_and_passport_office",
    displayName: "Visa and passport office",
  },
  {
    name: "categories/gcid:visa_consultant",
    displayName: "Visa Agent",
  },
  {
    name: "categories/gcid:visitor_center",
    displayName: "Visitor centre",
  },
  {
    name: "categories/gcid:vitamin_and_supplements_store",
    displayName: "Vitamin & Supplements Shop",
  },
  {
    name: "categories/gcid:vocal_instructor",
    displayName: "Vocal Instructor",
  },
  {
    name: "categories/gcid:vocational_college",
    displayName: "Vocational College",
  },
  {
    name: "categories/gcid:vocational_gymnasium_school",
    displayName: "Vocational gymnasium school",
  },
  {
    name: "categories/gcid:vocational_school_one",
    displayName: "Vocational school one",
  },
  {
    name: "categories/gcid:vocational_secondary_school",
    displayName: "Vocational secondary school",
  },
  {
    name: "categories/gcid:vocational_training_school",
    displayName: "Vocational school",
  },
  {
    name: "categories/gcid:volkswagen_dealer",
    displayName: "Volkswagen dealer",
  },
  {
    name: "categories/gcid:volleyball_club",
    displayName: "Volleyball club",
  },
  {
    name: "categories/gcid:volleyball_court",
    displayName: "Volleyball court",
  },
  {
    name: "categories/gcid:volleyball_instructor",
    displayName: "Volley Ball Coaching Center",
  },
  {
    name: "categories/gcid:volunteer_organization",
    displayName: "Voluntary organisation",
  },
  {
    name: "categories/gcid:volvo_dealer",
    displayName: "Volvo dealer",
  },
  {
    name: "categories/gcid:voter_registration_office",
    displayName: "Voter Registration Office",
  },
  {
    name: "categories/gcid:waldorf_kindergarten",
    displayName: "Waldorf kindergarten",
  },
  {
    name: "categories/gcid:waldorf_school",
    displayName: "Waldorf school",
  },
  {
    name: "categories/gcid:walk_in_clinic",
    displayName: "Walk-in clinic",
  },
  {
    name: "categories/gcid:wallpaper_installer",
    displayName: "Wallpaper installer",
  },
  {
    name: "categories/gcid:wallpaper_store",
    displayName: "Wallpaper Shop",
  },
  {
    name: "categories/gcid:war_museum",
    displayName: "War museum",
  },
  {
    name: "categories/gcid:warehouse",
    displayName: "Warehouse",
  },
  {
    name: "categories/gcid:warehouse_club",
    displayName: "Cash & Carry",
  },
  {
    name: "categories/gcid:warehouse_store",
    displayName: "Discount Store",
  },
  {
    name: "categories/gcid:washer_and_dryer_repair_service",
    displayName: "Washing Machine & Dryer Repair Service",
  },
  {
    name: "categories/gcid:washer_and_dryer_store",
    displayName: "Washing Machine & Dryer Shop",
  },
  {
    name: "categories/gcid:waste_management_service",
    displayName: "Waste-Management Service",
  },
  {
    name: "categories/gcid:watch_manufacturer",
    displayName: "Watch Manufacturer",
  },
  {
    name: "categories/gcid:watch_repair_service",
    displayName: "Watch repair shop",
  },
  {
    name: "categories/gcid:watch_store",
    displayName: "Watch shop",
  },
  {
    name: "categories/gcid:water_cooler_supplier",
    displayName: "Cooler Supplier",
  },
  {
    name: "categories/gcid:water_damage_restoration_service",
    displayName: "Water damage restoration service",
  },
  {
    name: "categories/gcid:water_filter_supplier",
    displayName: "Water Filter Supplier",
  },
  {
    name: "categories/gcid:water_jet_cutting_service",
    displayName: "Water jet cutting service",
  },
  {
    name: "categories/gcid:water_mill",
    displayName: "Water mill",
  },
  {
    name: "categories/gcid:water_park",
    displayName: "Water park",
  },
  {
    name: "categories/gcid:water_polo_pool",
    displayName: "Water polo pool",
  },
  {
    name: "categories/gcid:water_pump_supplier",
    displayName: "Water Pump Supplier",
  },
  {
    name: "categories/gcid:water_purification_company",
    displayName: "Water Purification Company",
  },
  {
    name: "categories/gcid:water_ski_shop",
    displayName: "Water ski shop",
  },
  {
    name: "categories/gcid:water_skiing_club",
    displayName: "Water skiing club",
  },
  {
    name: "categories/gcid:water_skiing_instructor",
    displayName: "Water skiing instructor",
  },
  {
    name: "categories/gcid:water_skiing_service",
    displayName: "Water skiing service",
  },
  {
    name: "categories/gcid:water_softening_equipment_supplier",
    displayName: "Water softening equipment supplier",
  },
  {
    name: "categories/gcid:water_sports_equipment_rental_service",
    displayName: "Water sports equipment rental service",
  },
  {
    name: "categories/gcid:water_tank_cleaning_service",
    displayName: "Water Tank Cleaners",
  },
  {
    name: "categories/gcid:water_testing_service",
    displayName: "Water Testing Laboratory",
  },
  {
    name: "categories/gcid:water_treatment_plant",
    displayName: "Water treatment plant",
  },
  {
    name: "categories/gcid:water_treatment_supplier",
    displayName: "Water treatment supplier",
  },
  {
    name: "categories/gcid:water_utility_company",
    displayName: "Water utility company",
  },
  {
    name: "categories/gcid:water_works",
    displayName: "Water works",
  },
  {
    name: "categories/gcid:water_works_equipment_supplier",
    displayName: "Water works equipment supplier",
  },
  {
    name: "categories/gcid:waterbed_repair_service",
    displayName: "Waterbed repair service",
  },
  {
    name: "categories/gcid:waterbed_store",
    displayName: "Waterbed Shop",
  },
  {
    name: "categories/gcid:waterproofing_company",
    displayName: "Waterproofing Company",
  },
  {
    name: "categories/gcid:wax_museum",
    displayName: "Wax museum",
  },
  {
    name: "categories/gcid:wax_supplier",
    displayName: "Wax & Paraffin Supplier",
  },
  {
    name: "categories/gcid:waxing_hair_removal_service",
    displayName: "Waxing Hair-Removal Service",
  },
  {
    name: "categories/gcid:weather_forecast_service",
    displayName: "Weather Forecast Agency",
  },
  {
    name: "categories/gcid:weaving_mill",
    displayName: "Weaving mill",
  },
  {
    name: "categories/gcid:web_hosting_service",
    displayName: "Web hosting company",
  },
  {
    name: "categories/gcid:website_designer",
    displayName: "Web Designer",
  },
  {
    name: "categories/gcid:wedding_bakery",
    displayName: "Wedding cake shop",
  },
  {
    name: "categories/gcid:wedding_buffet",
    displayName: "Wedding buffet",
  },
  {
    name: "categories/gcid:wedding_chapel",
    displayName: "Wedding chapel",
  },
  {
    name: "categories/gcid:wedding_dress_rental_service",
    displayName: "Wedding dress rental service",
  },
  {
    name: "categories/gcid:wedding_photographer",
    displayName: "Wedding photographer",
  },
  {
    name: "categories/gcid:wedding_planner",
    displayName: "Wedding planner",
  },
  {
    name: "categories/gcid:wedding_portrait_studio",
    displayName: "Wedding Portrait Studio",
  },
  {
    name: "categories/gcid:wedding_service",
    displayName: "Wedding service",
  },
  {
    name: "categories/gcid:wedding_souvenir_shop",
    displayName: "Wedding souvenir shop",
  },
  {
    name: "categories/gcid:wedding_store",
    displayName: "Wedding Shop",
  },
  {
    name: "categories/gcid:wedding_venue",
    displayName: "Wedding venue",
  },
  {
    name: "categories/gcid:weigh_station",
    displayName: "Weighbridge",
  },
  {
    name: "categories/gcid:weight_loss_service",
    displayName: "Weight-Loss Service",
  },
  {
    name: "categories/gcid:weightlifting_area",
    displayName: "Weightlifting area",
  },
  {
    name: "categories/gcid:weir",
    displayName: "Weir",
  },
  {
    name: "categories/gcid:welder",
    displayName: "Welder",
  },
  {
    name: "categories/gcid:welding_gas_supplier",
    displayName: "Welding gas supplier",
  },
  {
    name: "categories/gcid:welding_supply_store",
    displayName: "Welding Supply Shop",
  },
  {
    name: "categories/gcid:well_drilling_contractor",
    displayName: "Well drilling contractor",
  },
  {
    name: "categories/gcid:wellness_center",
    displayName: "Wellness Centre",
  },
  {
    name: "categories/gcid:wellness_hotel",
    displayName: "Wellness Hotel",
  },
  {
    name: "categories/gcid:wellness_program",
    displayName: "Wellness Programme",
  },
  {
    name: "categories/gcid:welsh_restaurant",
    displayName: "Welsh restaurant",
  },
  {
    name: "categories/gcid:wesleyan_church",
    displayName: "Wesleyan church",
  },
  {
    name: "categories/gcid:west_african_restaurant",
    displayName: "West African restaurant",
  },
  {
    name: "categories/gcid:western_apparel_store",
    displayName: "Western Clothing Shop",
  },
  {
    name: "categories/gcid:western_restaurant",
    displayName: "Western restaurant",
  },
  {
    name: "categories/gcid:whale_watching_tour_agency",
    displayName: "Whale watching tour agency",
  },
  {
    name: "categories/gcid:wheel_alignment_service",
    displayName: "Wheel alignment service",
  },
  {
    name: "categories/gcid:wheel_store",
    displayName: "Wheel Shop",
  },
  {
    name: "categories/gcid:wheelchair_rental_service",
    displayName: "Wheelchair rental service",
  },
  {
    name: "categories/gcid:wheelchair_repair_service",
    displayName: "Wheelchair repair service",
  },
  {
    name: "categories/gcid:wheelchair_store",
    displayName: "Wheelchair Shop",
  },
  {
    name: "categories/gcid:wholesale_bakery",
    displayName: "Wholesale bakery",
  },
  {
    name: "categories/gcid:wholesale_drugstore",
    displayName: "Wholesale drugstore",
  },
  {
    name: "categories/gcid:wholesale_florist",
    displayName: "Wholesale florist",
  },
  {
    name: "categories/gcid:wholesale_food_store",
    displayName: "Wholesale Food Store",
  },
  {
    name: "categories/gcid:wholesale_grocer",
    displayName: "Wholesale grocer",
  },
  {
    name: "categories/gcid:wholesale_jeweler",
    displayName: "Wholesale Jeweller",
  },
  {
    name: "categories/gcid:wholesale_market",
    displayName: "Wholesale Market",
  },
  {
    name: "categories/gcid:wholesale_plant_nursery",
    displayName: "Wholesale plant nursery",
  },
  {
    name: "categories/gcid:wholesaler",
    displayName: "Wholesaler",
  },
  {
    name: "categories/gcid:wholesaler_household_appliances",
    displayName: "Wholesaler household appliances",
  },
  {
    name: "categories/gcid:wi_fi_spot",
    displayName: "Wi-Fi spot",
  },
  {
    name: "categories/gcid:wicker_store",
    displayName: "Wicker Shop",
  },
  {
    name: "categories/gcid:wig_shop",
    displayName: "Wig shop",
  },
  {
    name: "categories/gcid:wildlife_and_safari_park",
    displayName: "Wildlife and safari park",
  },
  {
    name: "categories/gcid:wildlife_park",
    displayName: "Wildlife park",
  },
  {
    name: "categories/gcid:wildlife_refuge",
    displayName: "Wildlife Refuge",
  },
  {
    name: "categories/gcid:wildlife_rescue_service",
    displayName: "Wildlife rescue service",
  },
  {
    name: "categories/gcid:willow_basket_manufacturer",
    displayName: "Willow basket manufacturer",
  },
  {
    name: "categories/gcid:wind_farm",
    displayName: "Wind farm",
  },
  {
    name: "categories/gcid:wind_turbine_builder",
    displayName: "Wind turbine builder",
  },
  {
    name: "categories/gcid:window_cleaning_service",
    displayName: "Window cleaning service",
  },
  {
    name: "categories/gcid:window_installation_service",
    displayName: "Window installation service",
  },
  {
    name: "categories/gcid:window_supplier",
    displayName: "Window supplier",
  },
  {
    name: "categories/gcid:window_tinting_service",
    displayName: "Window tinting service",
  },
  {
    name: "categories/gcid:window_treatment_store",
    displayName: "Curtain shop",
  },
  {
    name: "categories/gcid:windsurfing_store",
    displayName: "Windsurfing Shop",
  },
  {
    name: "categories/gcid:wine_bar",
    displayName: "Wine bar",
  },
  {
    name: "categories/gcid:wine_cellar",
    displayName: "Wine cellar",
  },
  {
    name: "categories/gcid:wine_club",
    displayName: "Wine club",
  },
  {
    name: "categories/gcid:wine_storage_facility",
    displayName: "Wine storage facility",
  },
  {
    name: "categories/gcid:wine_store",
    displayName: "Wine shop",
  },
  {
    name: "categories/gcid:wine_wholesaler",
    displayName: "Wine wholesaler and importer",
  },
  {
    name: "categories/gcid:winemaking_supply_store",
    displayName: "Wine-making Supply Shop",
  },
  {
    name: "categories/gcid:winery",
    displayName: "Winery",
  },
  {
    name: "categories/gcid:wing_chun_school",
    displayName: "Wing chun school",
  },
  {
    name: "categories/gcid:wok_restaurant",
    displayName: "Wok restaurant",
  },
  {
    name: "categories/gcid:womens_clothing_store",
    displayName: "Ladies' Clothes Shop",
  },
  {
    name: "categories/gcid:womens_college",
    displayName: "Women's College",
  },
  {
    name: "categories/gcid:womens_organization",
    displayName: "Women's Organisation",
  },
  {
    name: "categories/gcid:womens_personal_trainer",
    displayName: "Women's Personal Trainer",
  },
  {
    name: "categories/gcid:womens_protection_service",
    displayName: "Womens protection service",
  },
  {
    name: "categories/gcid:womens_shelter",
    displayName: "Women's shelter",
  },
  {
    name: "categories/gcid:wood_and_laminate_flooring_supplier",
    displayName: "Wood and laminate flooring supplier",
  },
  {
    name: "categories/gcid:wood_floor_installation_service",
    displayName: "Wood floor installation service",
  },
  {
    name: "categories/gcid:wood_floor_refinishing_service",
    displayName: "Wood floor refinishing service",
  },
  {
    name: "categories/gcid:wood_frame_supplier",
    displayName: "Wood frame supplier",
  },
  {
    name: "categories/gcid:wood_stove_shop",
    displayName: "Wood stove shop",
  },
  {
    name: "categories/gcid:wood_supplier",
    displayName: "Wood Supplier",
  },
  {
    name: "categories/gcid:wood_working_class",
    displayName: "Wood Working Class",
  },
  {
    name: "categories/gcid:woodworker",
    displayName: "Woodworker",
  },
  {
    name: "categories/gcid:woodworking_supply_store",
    displayName: "Woodworking Supply Shop",
  },
  {
    name: "categories/gcid:wool_store",
    displayName: "Wool Shop",
  },
  {
    name: "categories/gcid:work_clothes_store",
    displayName: "Work Clothes Shop",
  },
  {
    name: "categories/gcid:workers_club",
    displayName: "Workers' club",
  },
  {
    name: "categories/gcid:working_womens_hostel",
    displayName: "Working Women's Hostel",
  },
  {
    name: "categories/gcid:wrestling_school",
    displayName: "Wrestling school",
  },
  {
    name: "categories/gcid:x_ray_equipment_supplier",
    displayName: "X-ray equipment supplier",
  },
  {
    name: "categories/gcid:x_ray_lab",
    displayName: "Medical imaging centre",
  },
  {
    name: "categories/gcid:yacht_broker",
    displayName: "Yacht Dealer",
  },
  {
    name: "categories/gcid:yacht_club",
    displayName: "Yacht club",
  },
  {
    name: "categories/gcid:yakatabune",
    displayName: "Yakatabune",
  },
  {
    name: "categories/gcid:yakiniku_restaurant",
    displayName: "Yakiniku restaurant",
  },
  {
    name: "categories/gcid:yakisoba_restaurant",
    displayName: "Yakisoba Restaurant",
  },
  {
    name: "categories/gcid:yakitori_restaurant",
    displayName: "Yakitori restaurant",
  },
  {
    name: "categories/gcid:yarn_store",
    displayName: "Wool shop",
  },
  {
    name: "categories/gcid:yemenite_restaurant",
    displayName: "Yemenite restaurant",
  },
  {
    name: "categories/gcid:yeshiva",
    displayName: "Yeshiva",
  },
  {
    name: "categories/gcid:yoga_instructor",
    displayName: "Yoga instructor",
  },
  {
    name: "categories/gcid:yoga_retreat_center",
    displayName: "Yoga Retreat Center",
  },
  {
    name: "categories/gcid:yoga_studio",
    displayName: "Yoga studio",
  },
  {
    name: "categories/gcid:youth_care",
    displayName: "Youth care",
  },
  {
    name: "categories/gcid:youth_center",
    displayName: "Youth Centre",
  },
  {
    name: "categories/gcid:youth_clothing_store",
    displayName: "Youth Clothing Shop",
  },
  {
    name: "categories/gcid:youth_club",
    displayName: "Youth club",
  },
  {
    name: "categories/gcid:youth_groups",
    displayName: "Youth group",
  },
  {
    name: "categories/gcid:youth_hostel",
    displayName: "Youth Hostel",
  },
  {
    name: "categories/gcid:youth_organization",
    displayName: "Youth organisation",
  },
  {
    name: "categories/gcid:youth_social_services_organization",
    displayName: "Youth Social Services Organisation",
  },
  {
    name: "categories/gcid:yucatan_restaurant",
    displayName: "Yucatan restaurant",
  },
  {
    name: "categories/gcid:zhe_jiang_restaurant",
    displayName: "Zhejiang restaurant",
  },
  {
    name: "categories/gcid:zoo",
    displayName: "Zoo",
  },
];

export default categories;
