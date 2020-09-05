using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ktrainer.Data;
using ktrainer.Models;

namespace ktrainer.Pages.Routines
{
    public class IndexModel : PageModel
    {
        private readonly ktrainer.Data.ApplicationDbContext _context;

        public IndexModel(ktrainer.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public IList<Routine> Routine { get;set; }

        public async Task OnGetAsync()
        {
            Routine = await _context.Routine.ToListAsync();
        }
    }
}
