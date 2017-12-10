class SecretpageController < ApplicationController
	http_basic_authenticate_with :name => "secret", :password => "secret"
end