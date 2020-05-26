/*
*  Copyright 2020 ThoughtWorks, Inc.
*  
*  This program is free software: you can redistribute it and/or modify
*  it under the terms of the GNU Affero General Public License as
*  published by the Free Software Foundation, either version 3 of the
*  License, or (at your option) any later version.
*  
*  This program is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU Affero General Public License for more details.
*  
*  You should have received a copy of the GNU Affero General Public License
*  along with this program.  If not, see <https://www.gnu.org/licenses/agpl-3.0.txt>.
*/


//= require thirdparty/firebase-2.3.2
//= require thirdparty/builder
//= require thirdparty/prototype
//= require prototype_ext
//= require backwards_compatibility
//= require thirdparty/moment-with-lang
//= require thirdparty/jquery/jquery-2.2.0
//= require thirdparty/jquery/jquery_ujs
//= require thirdparty/jquery/jquery.tipsy
//= require thirdparty/jquery/jquery.growl
//= require thirdparty/jquery/jquery-visibility
//= require thirdparty/jquery/jquery-ui-1.10.4.custom
//= require thirdparty/jquery/jquery.ui.touch-punch
//= require thirdparty/jquery/jquery.tag-it
//= require thirdparty/jquery/jquery.timeago
//= require thirdparty/jquery/jquery.mobile.events.touch-1.4.2
//= require thirdparty/jquery/jquery.jeditable
//= require thirdparty/jquery/jquery.ba-outside-event
//= require thirdparty/jquery/jquery.caret-1.5.2
//= require thirdparty/jquery/jquery.scrollintoview
//= require thirdparty/dropzone
//= require thirdparty/jquery.sorttable
//= require thirdparty/mousetrap.min
//= require thirdparty/mousetrap-global-bind.min
//= require thirdparty/tinycolor
//= require thirdparty/evaporate
//= require thirdparty/big.min
//= require thirdparty/clipboard.min
//= require jquery_conflict_handler
//= require jquery.tipsy-flash
//= require ckeditor-config
//= require mingle_ui
//= require mingle_relayout
//= require navigational_tabs
//= require alignment
//= require scroll_to_bottom
//= require with_progress_bar
//= require module
//= require jsloader
//= require thirdparty/effects
//= require thirdparty/dragdrop
//= require dragdrop_ext
//= require thirdparty/controls
//= require thirdparty/slider
//= require color_transforms
//= require color_selector
//= require color_picker
//= require single_checkbox
//= require thirdparty/old_color_selector
//= require lightbox
//= require smart_sort
//= require application
//= require general_init
//= require sidebar
//= require dropzone-uploads
//= require live/switching_datasource
//= require live/locally_generated_events
//= require live/filter_ast
//= require live/live_card
//= require live/view
//= require live/interpret_tag_events
//= require live/grid_updater
//= require fuzzy_drop_down
//= require lightbox_popups
//= require popover
//= require input_synchronizer
//= require membership
//= require inline_text_editor
//= require rich_textarea
//= require case_insensitive_hash
//= require tags/removable_tag
//= require tags/removable_tag_set
//= require tags/tags_editor
//= require card_list_view/rails_params
//= require card_list_view/params_change_listener
//= require card_list_view/card_list_view_link
//= require card_list_view/card_list_view_form
//= require card_list_view/screen_furniture
//= require card_list_view/favorite_highlighting
//= require card_list_view/params_controller
//= require parent_constraint_params
//= require column_selector
//= require draggable_map
//= require aggregate_drop_down
//= require drop_list/base
//= require drop_list/view
//= require drop_list/view/base
//= require drop_list/view/drop_down
//= require drop_list/view/drop_link
//= require drop_list/view/field
//= require drop_list/view/filter
//= require drop_list/view/inline_editor
//= require drop_list/view/layout
//= require drop_list/callback_action
//= require drop_list/basic_controller
//= require drop_list/filter_action
//= require drop_list/inline_edit_action
//= require drop_list/model
//= require drop_list/option
//= require drop_list
//= require filter
//= require card_popup
//= require card_drag_options
//= require swimming_pool
//= require grid/card_interactions
//= require grid/card_services
//= require grid/aggregate_calculation
//= require grid/card_wall
//= require sticky_grid_view_headers
//= require magic_card
//= require canvas
//= require card_tooltip
//= require card_tree/tree_node_base
//= require card_tree/node_parser
//= require card_tree/popup_node_behavior
//= require card_tree/searchable_node_behavior
//= require card_tree/dragdroppable_node_behavior
//= require card_tree/collapsible_node_behavior
//= require card_tree/vertical_tree_node
//= require card_tree/tree_view
//= require card_tree/incremental_tree_search
//= require card_tree/hierarchy_view
//= require card_tree/remove_from_tree
//= require scrolling_widget
//= require tree_config
//= require thirdparty/calendar
//= require thirdparty/calendar-setup
//= require thirdparty/calendar-en
//= require macro_builder/macro_builder
//= require macro_builder/series_editors
//= require macro_builder/series_editor
//= require transition_workflow_generator
//= require contextual_help
//= require autocompleter
//= require capped_periodical_updater
//= require radio_panel
//= require bulk_transitions
//= require manage_users
//= require checkbox
//= require Highcharts-2.2.3/js/adapters/prototype-adapter
//= require Highcharts-2.2.3/js/highcharts
//= require highcharts/theme
//= require tabs
//= require team
//= require planner/planner_application
//= require planner/timeline_status
//= require planner/plan_work_report
//= require planner/timeline
//= require planner/timeline/objectives_controller
//= require planner/timeline/objective_creation_controller
//= require planner/timeline/objective
//= require planner/timeline/plan_calendar
//= require planner/timeline/main_view
//= require planner/timeline/main_view_content
//= require planner/timeline/objective_creation
//= require planner/timeline/objective_editor
//= require planner/timeline/popup
//= require planner/timeline/forecast
//= require planner/timeline/forecast/contiguous_series
//= require planner/timeline/forecast/mark
//= require planner/timeline/forecast/chart
//= require planner/program_project
//= require planner/backlog_objectives
//= require planner/program
//= require planner/program_rename_editor
//= require also_viewing/updater
//= require also_viewing/poller
//= require tooltip
//= require common/drop_down_menu
//= require grid_lanes
//= require firebase-offline-on-idle
//= require jquery.firebase-badger
//= require jquery.inline_edit_form
//= require card_inline_editor
//= require jquery.invite_to_team
//= require hmac_generate
//= require color_selector
//= require mingle_tag_storage
//= require tag_stripe
//= require mingle_tageditor
//= require projects_drop_down
//= require dependency.tracker
//= require ajax_request_csrf_patch
//= require timeago
//= require greedy_snake
//= require snakes_on_a_holiday
//= require draggable_icon
//= require icon_droppable
//= require mingle_team_list
//= require murmur_input_autocomplete
//= require card_lightbox
//= require fuzzy-utils
//= require omni_card
//= require invoke
//= require confirm_project_delete
//= require user-notification-config
//= require murmurs_chat
//= require murmurs_card_lightbox
//= require projects_import
//= require my_work
//= require feedback
//= require trial_feedback
//= require search
//= require mixpanel
//= require mingle_property
//= require card_inner_wrapper
//= require adjust_font_color
//= require enable_card_editor
//= require transition_button
//= require checklist_widget
//= require inline_edit_any_number_property
//= require icon_assign
//= require buy
//= require bats
//= require dependencies
//= require user_selector
//= require thirdparty/nouislider
//= require dependency_inline_editor
//= require dependencies_import
//= require favorites
//= require ajax_error_handler
//= require license
//= require data_fixes
//= require slack
//= require user_project_preferences
//= require multiple_mappings
//= require wip_limit
//= require common_utils
//= require ui_utils
//= require drop_down
//= require thirdparty/c3-0.4.11/c3
//= require thirdparty/c3-0.4.11/d3.v3.min
//= require chart_renderer
//= require easy_charts/mql_builder
//= require thirdparty/yaml-0.3.0
//= require easy_charts/card_filter_value_wrapper
//= require text_box
//= require url_helper
//= require easy_charts/action_tracker
//= require project_data_store
//= require tags_filter
//= require ruby_to_js_date_format
//= require easy_charts/parameter
//= require easy_charts/group_parameter
//= require easy_charts/pair_parameter
//= require easy_charts/trend_line_parameter
//= require easy_charts/section_helpers
//= require_tree ./easy_charts/sections
//= require ./easy_charts/pie_chart/sections/build_chart_section
//= require ./easy_charts/pie_chart/sections/customize_chart_section
//= require ./easy_charts/ratio_bar_chart/sections/build_chart_section
//= require ./easy_charts/ratio_bar_chart/sections/customize_chart_section
//= require ./easy_charts/series
//= require ./easy_charts/series_parameter
//= require ./easy_charts/forecasting_parameter
//= require ./easy_charts/forecasting_options
//= require ./easy_charts/stacked_bar_chart/sections/build_chart_section
//= require ./easy_charts/data_series_chart/sections/build_chart_section
//= require ./easy_charts/daily_history_chart/sections/build_chart_section
//= require ./easy_charts/daily_history_chart/sections/data_section
//= require ./easy_charts/daily_history_chart/macro_builder
//= require ./easy_charts/cumulative_flow_graph/sections/build_chart_section
//= require ./easy_charts/stacked_bar_chart/sections/customize_chart_section
//= require ./easy_charts/data_series_chart/sections/customize_chart_section
//= require ./easy_charts/cumulative_flow_graph/sections/customize_chart_section
//= require ./easy_charts/pie_chart/macro_builder
//= require ./easy_charts/ratio_bar_chart/macro_builder
//= require ./easy_charts/stacked_bar_chart/macro_builder
//= require ./easy_charts/data_series_chart/macro_builder
//= require ./easy_charts/cumulative_flow_graph/macro_builder
//= require ./easy_charts/stacked_bar_chart/xLabelTranslator
//= require ./easy_charts/chart_builder
//= require easy_charts/card_filter
//= require easy_charts/card_type_filter
//= require easy_charts/card_filters
//= require easy_charts/property_definition_filter
//= require easy_charts/preview_container
//= require easy_charts/preview_generator
//= require easy_charts/macro_editor
//= require easy_charts/easy_charts_wizard
//= require easy_charts/dummy_series
//= require user_display_preferences
//= require mingle_data_export
//= require mingle_eol_banner