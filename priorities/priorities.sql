INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 1, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Unsubscription'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Unsubscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 2, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Profile Center'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Profile Center'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 3, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'E-Commerce'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'E-Commerce'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 4, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Direct Collect'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Visit'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 5, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Direct Collect'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Newsletter'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 6, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Direct Collect'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Program Subscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 7, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Direct Collect'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Promotional Campaigns'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 8, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Direct Collect'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Survey'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 9, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Webform'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Event'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 10, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Webform'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Enquiry'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 11, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Webform'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Contest'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 12, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Webform'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Newsletter'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 13, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Webform'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Program Subscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 14, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Webform'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Promotional Campaigns'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 15, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Webform'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Survey'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 16, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'BrandWebsite'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Event'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 17, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'BrandWebsite'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Enquiry'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 18, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'BrandWebsite'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Contest'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 19, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'BrandWebsite'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Newsletter'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 20, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'BrandWebsite'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Program Subscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 21, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'BrandWebsite'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Promotional Campaigns'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 22, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'BrandWebsite'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Survey'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 23, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Connected Bottle'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Event'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 24, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Connected Bottle'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Enquiry'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 25, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Connected Bottle'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Contest'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 26, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Connected Bottle'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Newsletter'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 27, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Connected Bottle'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Program Subscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 28, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Connected Bottle'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Promotional Campaigns'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 29, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Connected Bottle'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Survey'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 30, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Ipad APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Visit'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 31, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Ipad APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Event'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 32, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Ipad APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Contest'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 33, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Ipad APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Newsletter'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 34, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Ipad APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Program Subscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 35, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Ipad APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Promotional Campaigns'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 36, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Mobile APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Visit'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 37, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Mobile APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Event'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 38, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Mobile APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Contest'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 39, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Mobile APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Newsletter'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 40, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Mobile APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Program Subscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 41, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Mobile APP'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Promotional Campaigns'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 42, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Facebook)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Event'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 43, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Facebook)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Contest'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 44, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Facebook)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Newsletter'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 45, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Facebook)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Program Subscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 46, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Facebook)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Promotional Campaigns'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 47, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Facebook)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Survey'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 48, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Tumblr)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Event'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 49, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Tumblr)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Contest'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 50, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Tumblr)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Newsletter'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 51, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Tumblr)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Program Subscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 52, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Tumblr)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Promotional Campaigns'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 53, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Tumblr)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Survey'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 54, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Twitter)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Event'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 55, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Twitter)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Contest'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 56, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Twitter)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Newsletter'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 57, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Twitter)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Program Subscription'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 58, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Twitter)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Promotional Campaigns'); 

INSERT INTO `ref_priority` (`id`, `etag`, `priority`, `pr_entity_id`, `touch_point_source_id`, `activity_type_id`)
        SELECT uuid(), 1, 59, null,
        (SELECT `id` FROM ref_touch_point_source WHERE value = 'Social (Twitter)'),
        (SELECT `id` FROM ref_activity_type WHERE value = 'Survey'); 

