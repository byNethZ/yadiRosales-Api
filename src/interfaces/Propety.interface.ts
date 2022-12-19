export interface PropertyHomeProps {
    id: number;
    list_number: number;
    street: string | null;
    city: string | null;
    bedrooms: number | null;
    baths_full: number | null;
    baths_mid: number | null;
    sq_total: string | null;
    price: string | null;
    picture_count: number | null;
    image: string | null;
    listing_office_name: string | null;
    colisting_office_name: string | null;
    listing_member_shortid: string | null;
    colisting_member_shortid: string | null;
}

export interface PropertyProps extends PropertyHomeProps {
        approved: string | null;
        type: string | null;
        timestamp: string | null;
        public: string | null;
        modify_timestamp: string | null;
        subtype: string | null;
        status: string | null;
        street_number: string | null;
        street_suffix: string | null;
        state: string | null;
        county: string | null;
        zipcode: string | null;
        latitude: string | null;
        longitude: string | null;
        year_built: number | null;
        lot_size: string | null;
        acres: string | null;
        rooms: number | null;
        baths: string | null;
        taxes: string | null;
        subdivision: string | null;
        taxmap: string | null;
        legal_desc: string | null;
        deed_page: string | null;
        deed_book: string | null;
        elementary_school: string | null;
        middle_school: string | null;
        high_school: string | null;
        hoa_fee: string | null;
        directions: string | null;
        auction: string | null;
        home_warranty: string | null;
        builders_warranty: string | null;
        public_remarks: string | null;
        monthly_rent: string | null;
        units: string | null;
        fireplace_list: string | null;
        pets_allowed: string | null;

        garage_parking: string | null;
        owner: string | null;

        gf_appliances: string | null;
        basement: string | null;
        bed_bath: string | null;
        brick_stone: string | null;
        gf_community_features: string | null;
        cooling: string | null;
        description: string | null;
        dining: string | null;
        documents: string | null;
        gf_equipment: string | null;
        gf_exterior: string | null;
        exterior_features: string | null;
        financing_available: string | null;
        gf_fireplace: string | null;
        floors: string | null;
        gf_foundation: string | null;
        gf_furnished: string | null;
        gf_garage: string | null;
        gf_green_features: string | null;
        heating: string | null;
        interior: string | null;
        lease_terms: string | null;
        gf_lot_description: string | null;
        gf_new_construction: string | null;
        owner_pays: string | null;
        pool: string | null;
        possession: string | null;
        roofing: string | null;
        gf_rooms: string | null;
        showing: string | null;
        gf_special_needs: string | null;
        style: string | null;
        tenant_pays: string | null;
        type_sale: string | null;
        utilities: string | null;
        water_sewer: string | null;
        windows: string | null;

        existing_financing: string | null;
        unit_one_features: string | null;
        unit_two_features: string | null;
        unit_three_features: string | null;
        unit_four_features: string | null;

        clear_percent: string | null;
        adjacent_use: string | null;
        docs_file: string | null;
        flood_zone: string | null;
        improvements: string | null;
        options: string | null;
        road: string | null;
        shape: string | null;
        structures: string | null;

        selling_member_shortid: string | null;
        coselling_member_shortid: string | null;
        listing_member_name: string | null;
        colisting_member_name: string | null;
        selling_member_name: string | null;
        coselling_member_name: string | null;
        selling_office_name: string | null;
        coselling_office_name: string | null;

        created_at: string;
        updated_at: string;
}

export interface IFilterOptions {
    minPrice: string | undefined;
    maxPrice: string | undefined;
    //subtype: string[];
    beds: string | undefined;
    baths: string | undefined;
    minSqFt: string | undefined;
    maxSqFt: string | undefined;
    yearBuilt: string | undefined;
    acres: string | undefined;
}

export interface IForm{
    propertyid: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    message: string;
    typetour: string;
    date: string;
    time: string
}