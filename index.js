const facebookAds = require("./includes/stitch_facebook_ads");
const facebookAdsets = require("./includes/stitch_facebook_ad_groups");
const facebookCampaigns = require("./includes/stitch_facebook_campaigns");
const facebookAdPerformance = require("./includes/stitch_facebook_ad_performance");

module.exports = (params) => {

    params = {
        // set defaults for parameters
        facebookDatabase: "",
        facebookSchema: "",
        tablePrefix: "",
        stagingTablePrefix: "",
        stagingSchema: "",
        ...params
    };

    let stitchFacebookAds, stitchFacebookAdsets, stitchFacebookCampaigns, stitchFacebookAdPerformance;

    stitchFacebookAds = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "ads"
    });

    stitchFacebookAdsets = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "adsets"
    });

    stitchFacebookCampaigns = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "campaigns"
    });

    stitchFacebookAdPerformance = declare({
        ...params.defaultConfig,
        database: params.facebookDatabase,
        schema: params.facebookSchema,
        name: "ads_insights"
    });

    // Publish and return datasets.
    let result = {
        stitchFacebookAds: facebookAds(params),
        stitchFacebookAdsets: facebookAdsets(params),
        stitchFacebookCampaigns: facebookCampaigns(params),
        stitchFacebookAdPerformance: facebookAdPerformance(params)
    };

    return result;
}
