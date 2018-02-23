require 'test_helper'

class HyakuninControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hyakunin_index_url
    assert_response :success
  end

  test "should get game" do
    get hyakunin_game_url
    assert_response :success
  end

end
