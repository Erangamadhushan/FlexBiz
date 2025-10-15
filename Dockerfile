FROM php:8.2-apache

# Working directory
WORKDIR /var/www/html

# Enable Apache mod_rewrite (useful for routing)
RUN a2enmod rewrite

# Copy application files to container
COPY . /var/www/html/

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expose port 80
EXPOSE 80

# Start Apache in foreground
CMD ["apache2-foreground"]