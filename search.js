document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    document.querySelector('.search-bar').appendChild(searchResults);

    // Sample search data - you can replace this with your actual content
    const searchableContent = [
        {
            title: "Solar Farm Optimization",
            type: "Case Study",
            url: "case-studies.html#solar-farm",
            description: "156% Efficiency Boost in Solar Implementation"
        },
        {
            title: "Battery Integration",
            type: "Case Study",
            url: "case-studies.html#battery",
            description: "92% Cost Reduction in Energy Storage"
        },
        {
            title: "Wind Farm Efficiency",
            type: "Case Study",
            url: "case-studies.html#wind-farm",
            description: "78% Output Increase in Wind Energy"
        },
        {
            title: "Weekly Energy Insights",
            type: "Newsletter",
            url: "newsletter.html",
            description: "Latest updates in renewable technology"
        }
    ];

    // Add these styles to the search results
    searchResults.style.display = 'none';

    searchInput.addEventListener('focus', function() {
        searchResults.style.display = 'block';
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-bar')) {
            searchResults.style.display = 'none';
        }
    });

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const filteredResults = searchableContent.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)
        );

        if (filteredResults.length > 0) {
            searchResults.innerHTML = filteredResults.map(result => `
                <a href="${result.url}" class="search-result-item">
                    <span class="result-type">${result.type}</span>
                    <h4>${result.title}</h4>
                    <p>${result.description}</p>
                </a>
            `).join('');
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = `
                <div class="search-result-item no-results">
                    <p>No results found for "${query}"</p>
                </div>
            `;
            searchResults.style.display = 'block';
        }
    });
}); 