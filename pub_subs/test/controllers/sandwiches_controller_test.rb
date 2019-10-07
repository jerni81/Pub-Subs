require 'test_helper'

class SandwichesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sandwich = sandwiches(:one)
  end

  test "should get index" do
    get sandwiches_url, as: :json
    assert_response :success
  end

  test "should create sandwich" do
    assert_difference('Sandwich.count') do
      post sandwiches_url, params: { sandwich: { name: @sandwich.name } }, as: :json
    end

    assert_response 201
  end

  test "should show sandwich" do
    get sandwich_url(@sandwich), as: :json
    assert_response :success
  end

  test "should update sandwich" do
    patch sandwich_url(@sandwich), params: { sandwich: { name: @sandwich.name } }, as: :json
    assert_response 200
  end

  test "should destroy sandwich" do
    assert_difference('Sandwich.count', -1) do
      delete sandwich_url(@sandwich), as: :json
    end

    assert_response 204
  end
end
